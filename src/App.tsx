import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import StarBackground from './components/StarBackground';
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import ShowcaseGrid from './components/ProductShowcase/ShowcaseGrid';
import LoadingSpinner from './components/LoadingSpinner';

const LoadingFallback = () => (
  <div className="loader-container">
    <div className="text-center space-y-6">
      <LoadingSpinner />
      <p className="text-gradient text-xl font-bold animate-pulse">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="min-h-screen text-white overflow-x-hidden relative">
        <StarBackground />
        <Navigation />
        
        <section className="pt-32 flex items-center justify-center px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-purple-900/20 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 max-w-3xl relative"
          >
            <motion.h2 
              className="text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to
              <motion.span
                className="block text-gradient text-6xl mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Killa's Territory
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-purple-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Where the Strong Survive and the Weak Pay Their Taxes
            </motion.p>
            <ShowcaseGrid />
          </motion.div>
        </section>

        <Footer />
      </div>
    </Suspense>
  );
}

export default App;