import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ExternalLink, Heart } from 'lucide-react';

const usefulLinks = [
  { href: '#', label: 'About Sanskrit Studies' },
  { href: '#', label: 'Gita Resources' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
];

const contactInfo = {
  email: 'contact@sanskrit.ie',
  phone: '+353 1 234 5678',
  address: 'Dublin, Ireland',
};

export function Footer() {
  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-gold to-saffron" />
      
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Main Footer */}
      <div className="relative container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <span className="font-heading text-2xl md:text-3xl font-bold text-gradient-saffron">
                ॐ SANSKRIT
              </span>
              <p className="text-xs tracking-widest text-secondary-foreground/70 mt-2">
                BHAGAVAD GĪTĀ • ANCIENT WISDOM
              </p>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed max-w-sm">
              Dedicated to preserving and sharing the timeless wisdom of the Bhagavad Gita
              and Sanskrit scriptures for seekers worldwide.
            </p>
            
            {/* Social-style decorative element */}
            <div className="mt-6 flex gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="text-lg">🙏</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="text-lg">📿</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="text-lg">🕉️</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-saffron to-gold" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                  <span className="w-8 h-8 rounded-lg bg-secondary-foreground/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </span>
                  {contactInfo.address}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-saffron to-gold" />
              Useful Links
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-all hover:translate-x-1 group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/60">
            <p>
              © {new Date().getFullYear()} Sanskrit Studies. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
              Built with <Heart className="w-3 h-3 text-primary fill-primary" /> for ancient wisdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
