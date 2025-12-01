import { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navSections = [
  {
    label: 'ĀYURVEDA',
    hasDropdown: true,
    items: [
      { href: '/ayurveda-introduction', label: 'Introduction' },
      { href: '/ayurveda-timing', label: 'Timing' },
      { href: '/daily-routines', label: 'Food' },
    ],
  },
  {
    label: 'YOGASŪTRAS',
    hasDropdown: true,
    items: [
      { href: '/yoga-introduction', label: 'Introduction' },
      { href: '/yoga-obstacles', label: 'Obstacles' },
      { href: '/yoga-practice', label: 'Practice' },
      { href: '/yogasana', label: 'Yogāsana' },
      { href: '#', label: 'Glossary' },
    ],
  },
  {
    label: 'BHAGAVAD GĪTĀ',
    hasDropdown: true,
    items: [
      { href: '/introduction', label: 'Introduction' },
      { href: '/daily-routines', label: 'Daily Routines' },
      { href: '/', label: 'Read Gita' },
    ],
    active: true,
  },
  {
    label: 'UPANIṢADS',
    hasDropdown: true,
    items: [
      { href: '#', label: 'Īśa Upaniṣad' },
      { href: '#', label: 'Kena Upaniṣad' },
      { href: '#', label: 'Kaṭha Upaniṣad' },
      { href: '#', label: 'Muṇḍaka Upaniṣad' },
    ],
  },
  {
    label: 'SANSKRIT',
    hasDropdown: true,
    items: [
      { href: '#', label: 'Grammar' },
      { href: '#', label: 'Vocabulary' },
      { href: '#', label: 'Pronunciation' },
      { href: '#', label: 'Scripts' },
    ],
  },
  {
    label: 'CONTACT US',
    hasDropdown: false,
    href: '#',
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-40 w-full bg-card/95 backdrop-blur-xl supports-[backdrop-filter]:bg-card/80 shadow-lg"
    >
      {/* Top accent border with gradient animation */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-gold to-saffron animate-gradient-x" />

      <div className="container mx-auto px-4 md:px-6 py-2 relative z-10">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-saffron to-gold rounded-full opacity-70 blur group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative rounded-full p-1 bg-card shadow-md border border-border">
                <img
                  src={logo}
                  alt="Bhagavad Gita Logo"
                  className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-bold text-gradient-saffron tracking-wide">
                BHAGAVAD GĪTĀ
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest">
                SANSKRIT STUDIES
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Search Icon */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--muted))' }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full transition-all duration-200 mr-2 text-muted-foreground hover:text-primary"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {navSections.map((section) =>
              section.hasDropdown ? (
                <DropdownMenu key={section.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-all duration-200 focus:outline-none group">
                    <span className="relative">
                      {section.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="min-w-[180px] bg-card/95 backdrop-blur-xl border-border/50 shadow-elevated"
                  >
                    {section.items?.map((item) => (
                      <DropdownMenuItem key={item.label} asChild>
                        <a
                          href={item.href}
                          className="cursor-pointer hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary transition-colors"
                        >
                          {item.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <motion.a
                  key={section.label}
                  href={section.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative group ${section.active
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                    }`}
                >
                  {section.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${section.active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </motion.a>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-border/50"
            >
              {/* Mobile Search */}
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 px-3 py-2.5 bg-muted rounded-lg border border-border/50">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="flex flex-col pb-4">
                {navSections.map((section, index) => (
                  <motion.div
                    key={section.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {section.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setExpandedMobileSection(
                              expandedMobileSection === section.label ? null : section.label
                            )
                          }
                          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                        >
                          {section.label}
                          <motion.div
                            animate={{ rotate: expandedMobileSection === section.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {expandedMobileSection === section.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-muted/30 overflow-hidden"
                            >
                              {section.items?.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className="block px-8 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={section.href}
                        className={`block px-4 py-3 text-sm font-medium transition-colors ${section.active
                          ? 'text-primary bg-primary/10 border-l-2 border-primary'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                          }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {section.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom border with subtle glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </motion.header>
  );
}
