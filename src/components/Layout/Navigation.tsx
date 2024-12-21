import React from 'react';
import { motion } from 'framer-motion';
import { Skull } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed w-full backdrop-blur-sm bg-purple-900/30 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2"
          animate={{ 
            y: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Skull className="w-8 h-8 text-gradient" />
          <h1 className="text-2xl font-bold text-gradient">
            Killa's Crib
          </h1>
        </motion.div>
        <div className="flex gap-6">
          <motion.a
            href="https://discord.gg/Cx9fWtsBsP"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="hover:text-purple-400 transition-colors"
          >
            Join Discord
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;