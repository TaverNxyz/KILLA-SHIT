import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, CalendarDays } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors"
    >
      <motion.img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
        whileHover={{ scale: 1.1 }}
      />
      <h3 className="text-2xl font-bold text-gradient mb-4">{product.name}</h3>
      <p className="text-gray-300 mb-6">{product.description}</p>
      
      <div className="grid grid-cols-3 gap-4">
        <SubscriptionOption
          icon={Clock}
          duration="Day"
          price={product.prices.day}
        />
        <SubscriptionOption
          icon={Calendar}
          duration="Week"
          price={product.prices.week}
        />
        <SubscriptionOption
          icon={CalendarDays}
          duration="Month"
          price={product.prices.month}
        />
      </div>
    </motion.div>
  );
};

const SubscriptionOption = ({ icon: Icon, duration, price }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
  >
    <Icon className="w-6 h-6 mb-2 text-purple-400" />
    <span className="text-sm text-gray-300">{duration}</span>
    <span className="font-bold text-gradient">${price}</span>
  </motion.button>
);

export default ProductCard;