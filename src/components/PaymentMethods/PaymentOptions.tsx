import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, DollarSign, CreditCard } from 'lucide-react';
import PaymentModal from './PaymentModal';

const PaymentOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const methods = [
    { icon: Bitcoin, name: 'Bitcoin', id: 'btc' },
    { icon: CreditCard, name: 'Litecoin', id: 'ltc' },
    { icon: DollarSign, name: 'CashApp', id: 'cashapp' }
  ];

  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-gradient mb-8 text-center">Payment Methods</h3>
      <div className="flex justify-center gap-6">
        {methods.map(({ icon: Icon, name, id }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMethod(id)}
            className="bg-white/5 backdrop-blur-lg p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Icon className="w-8 h-8 mb-2 text-purple-400" />
            <span className="block text-center text-sm">{name}</span>
          </motion.div>
        ))}
      </div>

      <PaymentModal
        isOpen={!!selectedMethod}
        onClose={() => setSelectedMethod(null)}
        method={methods.find(m => m.id === selectedMethod) || methods[0]}
      />
    </div>
  );
};

export default PaymentOptions;