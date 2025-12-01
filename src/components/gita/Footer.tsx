import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Youtube, Globe, ChevronUp } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Globe, href: '#', label: 'Website' },
];

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#3d4a3a] text-[#c4b896] overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="relative container mx-auto px-4 py-12 md:py-16">
        {/* Connect Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Connect Title with Social Icons */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-lg italic text-[#c4b896]/80">Connect</span>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(196, 184, 150, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-[#c4b896]/40 flex items-center justify-center text-[#c4b896]/70 hover:text-[#c4b896] hover:border-[#c4b896] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Logo Section */}
          <motion.div 
            className="flex flex-col items-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Om Symbol */}
            <div className="text-2xl text-[#d4a574] mb-1">ॐ</div>
            
            {/* Heart with Infinity Logo */}
            <div className="relative w-16 h-16 mb-4">
              {/* Heart shape */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Heart */}
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e8c4a0" />
                    <stop offset="100%" stopColor="#c9a67a" />
                  </linearGradient>
                  <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7cb07e" />
                    <stop offset="100%" stopColor="#5a9a5c" />
                  </linearGradient>
                </defs>
                {/* Heart path */}
                <path 
                  d="M50 85 C20 55, 5 35, 25 20 C40 10, 50 25, 50 25 C50 25, 60 10, 75 20 C95 35, 80 55, 50 85Z"
                  fill="url(#heartGradient)"
                />
                {/* Infinity symbol */}
                <path 
                  d="M25 60 C15 60, 10 70, 20 75 C30 80, 45 70, 50 65 C55 70, 70 80, 80 75 C90 70, 85 60, 75 60 C65 60, 55 70, 50 75 C45 70, 35 60, 25 60Z"
                  fill="url(#infinityGradient)"
                  stroke="#4a8a4c"
                  strokeWidth="1"
                />
              </svg>
            </div>
            
            {/* Brand Name */}
            <h2 className="text-3xl md:text-4xl font-heading tracking-[0.2em] text-[#c4b896]" style={{ fontFamily: 'Georgia, serif' }}>
              WELLBEING~SVASTI
            </h2>
          </motion.div>

          {/* Copyright Section */}
          <motion.div 
            className="text-center text-sm text-[#c4b896]/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="mb-1">
              © {new Date().getFullYear()} Rutger Kortenhorst. All Rights Reserved | Design and Developed by
            </p>
            <a 
              href="#" 
              className="text-[#c4b896]/80 hover:text-[#d4a574] transition-colors underline underline-offset-2"
            >
              Burning Desire Inclusive
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-[#2d3a2a] hover:bg-[#3d4a3a] text-[#c4b896] rounded-lg shadow-lg flex items-center justify-center transition-colors z-50"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
