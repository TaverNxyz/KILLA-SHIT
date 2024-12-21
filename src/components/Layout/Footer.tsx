import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Mail, href: 'https://discord.gg/Cx9fWtsBsP', label: 'Discord' }
  ];

  return (
    <footer id="contact" className="bg-black/30 backdrop-blur-sm py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transform transition-all hover:scale-110"
                >
                  <Icon className="w-6 h-6 hover:text-purple-400 cursor-pointer" />
                </a>
              ))}
            </div>
          </div>
          <div className="text-center md:text-right">
            <a 
              href="https://discord.gg/Cx9fWtsBsP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gradient hover:scale-105 transform transition-all inline-block"
            >
              Join our Discord Community
            </a>
            <p className="text-sm text-gray-400 mt-2">
              © {new Date().getFullYear()} PlentifulPortal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;