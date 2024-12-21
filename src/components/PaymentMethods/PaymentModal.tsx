import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, X } from 'lucide-react';
import QRCode from 'qrcode.react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  method: {
    id: string;
    name: string;
    address?: string;
  };
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, method }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const addresses = {
    btc: 'bc1qe7zzyk3264fwya3y0wj4x4wy6tvd86cf46e39u',
    ltc: 'ltc1quu6df4vvum7640sfywjsxvvcsh5ax9pwq4dsu9'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900/90 p-6 rounded-xl max-w-md w-full backdrop-blur-lg"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gradient">{method.name} Payment</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {(method.id === 'btc' || method.id === 'ltc') && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <QRCode 
                    value={addresses[method.id]}
                    size={200}
                    level="H"
                    className="p-2 bg-white rounded-lg"
                  />
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-mono break-all">{addresses[method.id]}</p>
                    <button
                      onClick={() => copyToClipboard(addresses[method.id])}
                      className="text-purple-400 hover:text-purple-300 p-2"
                    >
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {method.id === 'cashapp' && (
              <div className="text-center">
                <p>Please contact support via Discord for CashApp payment details.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;