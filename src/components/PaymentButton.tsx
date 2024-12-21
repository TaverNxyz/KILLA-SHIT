import React, { useState } from 'react';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { stripePromise } from '../config/stripe';

interface PaymentButtonProps {
  amount: number;
  productName: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ amount, productName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize. Please check your configuration.');
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, productName }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Payment initialization failed');
      }

      const session = await response.json();
      
      if (!session?.id) {
        throw new Error('Invalid session response');
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        throw error;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment failed';
      setError(errorMessage);
      console.error('Payment error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handlePayment}
        disabled={isLoading}
        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-purple-400 to-blue-500 rounded-lg font-semibold text-white transform transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <ShoppingCart className="w-5 h-5" />
        )}
        <span>{isLoading ? 'Processing...' : 'Purchase Now'}</span>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-purple-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      </motion.button>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default PaymentButton;