import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Security",
      description: "Industry-leading protection for all your software needs"
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Immediate access to all purchased software"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service via Discord"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join our growing community of power users"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-gradient mb-12 text-center"
        >
          About PlentifulPortal
        </motion.h2>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Your premier destination for premium software solutions. We provide cutting-edge tools and applications 
          to enhance your digital experience, backed by our commitment to excellence and customer satisfaction.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl hover:bg-white/10 transition-all"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;