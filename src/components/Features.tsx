import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Zap } from 'lucide-react';

const features = [
  {
    title: "Secure Payments",
    description: "Enterprise-grade security with end-to-end encryption",
    Icon: Shield
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer service for your needs",
    Icon: Clock
  },
  {
    title: "Instant Access",
    description: "Get immediate access to your purchased products",
    Icon: Zap
  }
];

const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <feature.Icon className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;