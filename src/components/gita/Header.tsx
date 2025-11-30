import { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
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
      { href: '#', label: 'Introduction' },
      { href: '#', label: 'Principles' },
      { href: '#', label: 'Treatments' },
      { href: '#', label: 'Diet & Lifestyle' },
    ],
  },
  {
    label: 'YOGASŪTRAS',
    hasDropdown: true,
    items: [
      { href: '#', label: 'Samādhi Pāda' },
      { href: '#', label: 'Sādhana Pāda' },
      { href: '#', label: 'Vibhūti Pāda' },
      { href: '#', label: 'Kaivalya Pāda' },
    ],
  },
  {
    label: 'BHAGAVAD GĪTĀ',
    hasDropdown: false,
    href: '#',
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
      className="sticky top-0 z-40 w-full border-b border-amber-200/60 bg-[#fffbf2]/95 backdrop-blur-xl supports-[backdrop-filter]:bg-[#fffbf2]/80 rounded-b-[2rem] shadow-[0_4px_20px_rgba(245,158,11,0.1)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] transition-all duration-500 overflow-hidden"
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-amber-100/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-2 relative z-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="rounded-full p-1 bg-gradient-to-br from-amber-100 to-amber-200 shadow-md border border-amber-300 hover:shadow-lg hover:shadow-amber-200/50 transition-all duration-300 transform hover:scale-105">
              <img
                src={logo}
                alt="Bhagavad Gita Logo"
                className="h-10 w-10 rounded-full object-cover border border-white shadow-inner"
              />
            </div>
            <span className="ml-3 text-lg font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent tracking-wide">
              BHAGAVAD GITA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 flex-1 ml-12">
            {/* Search Icon */}
            <button className="p-2 hover:bg-amber-50 hover:shadow-sm rounded-lg transition-all duration-200 mr-4 border border-transparent hover:border-amber-200">
              <Search className="w-5 h-5 text-amber-700" />
            </button>

            {navSections.map((section) =>
              section.hasDropdown ? (
                <DropdownMenu key={section.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-amber-700 hover:bg-amber-50/50 rounded-md transition-all duration-200 focus:outline-none">
                    {section.label}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[180px] animate-in fade-in-80 zoom-in-95">
                    {section.items?.map((item) => (
                      <DropdownMenuItem key={item.label} asChild>
                        <a href={item.href} className="cursor-pointer hover:bg-amber-50 hover:text-amber-700 focus:bg-amber-50 focus:text-amber-700">
                          {item.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={section.label}
                  href={section.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${section.active
                      ? 'text-saffron bg-saffron/10 shadow-sm'
                      : 'text-muted-foreground hover:text-amber-700 hover:bg-amber-50/50'
                    }`}
                >
                  {section.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            {/* Mobile Search */}
            <div className="px-4 pb-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="flex flex-col">
              {navSections.map((section) => (
                <div key={section.label}>
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
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${expandedMobileSection === section.label ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      {expandedMobileSection === section.label && (
                        <div className="bg-muted/50 animate-fade-in">
                          {section.items?.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={section.href}
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${section.active
                          ? 'text-saffron bg-saffron/10'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {section.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </motion.header>
  );
}
