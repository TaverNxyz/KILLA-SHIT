import React from 'react';
import { motion } from 'framer-motion';
import PaymentOptions from '../PaymentMethods/PaymentOptions';

const ShowcaseGrid = () => {
  return (
    <section className="min-h-screen flex">
      <motion.div 
        className="product-side"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <img 
            src="/images/killa-action.jpg"
            alt="Killa"
            className="w-64 h-64 object-contain mx-auto mb-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-4xl font-bold mb-6">Master of Ultra</h2>
        <div className="text-purple-200 mb-8 text-center">
          <ul className="space-y-2">
            <li className="flex items-center justify-center gap-2">
              <img 
                src="/images/killa-tracksuit.jpg"
                alt="Tracksuit"
                className="w-8 h-8 object-contain rounded"
              />
              <span className="text-xl">✦ PERMANENT TRACKSUIT IS FULFILLED, ACC LEVEL 1</span>
            </li>
          </ul>
        </div>
        <PaymentOptions />
      </motion.div>

      <div className="split-line"></div>

      <motion.div 
        className="product-side"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <img 
            src="/images/killa-helmet.jpg"
            alt="Killa Helmet"
            className="w-64 h-64 object-contain mx-auto mb-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-4xl font-bold mb-6">Master of Ultra + Kappa</h2>
        <div className="text-purple-200 mb-8 text-center">
          <ul className="space-y-2">
            <li className="text-xl">✦ Everything in Master of Ultra</li>
            <li className="text-xl">✦ Premium Support</li>
          </ul>
        </div>
        <PaymentOptions />
      </motion.div>
    </section>
  );
};

export default ShowcaseGrid;