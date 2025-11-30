import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

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
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <span className="font-heading text-2xl font-bold">SANSKRIT</span>
              <p className="text-xs tracking-widest text-secondary-foreground/70 mt-1">
                BHAGAVAD GĪTĀ
              </p>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Dedicated to preserving and sharing the timeless wisdom of the Bhagavad Gita
              and Sanskrit scriptures for seekers worldwide.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm text-secondary-foreground/80">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {contactInfo.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-secondary-foreground/60">
            <p>
              © {new Date().getFullYear()} Sanskrit Studies. All rights reserved.
            </p>
            <p>
              Built with reverence for ancient wisdom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
