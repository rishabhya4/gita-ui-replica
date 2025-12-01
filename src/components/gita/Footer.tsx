import { Facebook, Twitter, Youtube, Globe, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';
import { motion } from 'framer-motion';

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { Icon: Facebook, href: "#", delay: 0 },
    { Icon: Twitter, href: "#", delay: 0.1 },
    { Icon: Youtube, href: "#", delay: 0.2 },
    { Icon: Globe, href: "#", delay: 0.3 },
  ];

  return (
    <footer className="relative bg-[#2f3e30] text-[#e8e6d9] py-12 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-noise"></div>

      <motion.div
        className="container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* Connect Section */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="font-heading text-xl italic tracking-wide">Connect</span>
          <div className="flex gap-3">
            {socialIcons.map(({ Icon, href, delay }, index) => (
              <motion.a
                key={index}
                href={href}
                className="hover:text-white transition-colors p-1 border border-[#e8e6d9]/30 rounded-full hover:border-white hover:bg-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + delay, duration: 0.4 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Central Logo/Branding */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img src={logo} alt="Wellbeing Svasti Logo" className="h-32 w-auto object-contain drop-shadow-2xl" />
            {/* Glow effect */}
            <div className="absolute inset-0 blur-2xl bg-amber-400/20 -z-10" />
          </motion.div>

          <motion.h2
            className="font-heading text-4xl md:text-6xl tracking-widest text-[#e0dac0] mt-6 uppercase"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Wellbeing~Svasti
          </motion.h2>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-xs md:text-sm text-[#e8e6d9]/70 space-y-1 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>© 2025 Rutger Kortenhorst. All Rights Reserved | Design and Developed by</p>
          <motion.p
            className="text-[#4fd1c5]"
            whileHover={{ scale: 1.05, color: "#5fe1d5" }}
            transition={{ duration: 0.2 }}
          >
            Burning Desire Inclusive
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#1a261b] text-white p-3 rounded-md shadow-lg hover:bg-black z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20
        }}
        whileHover={{ scale: 1.1, boxShadow: "0 10px 40px rgba(245,158,11,0.4)" }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
