import { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full border border-amber-100/50 bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90 rounded-b-xl shadow-[0_4px_20px_rgba(245,158,11,0.2)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.25)] transition-all duration-300">
      <div className="container mx-auto px-4 py-1">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="rounded-full p-1.5 bg-gradient-to-br from-amber-100 to-amber-200 shadow-lg border-2 border-amber-300 hover:shadow-xl hover:shadow-amber-200/50 transition-all duration-300 transform hover:scale-105">
              <img 
                src={logo} 
                alt="Bhagavad Gita Logo" 
                className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-inner"
              />
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
              BHAGAVAD GITA
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 ml-12">
            {/* Search Icon */}
            <button className="p-2 hover:bg-amber-50 hover:shadow-sm rounded-lg transition-all duration-200 mr-4 border border-transparent hover:border-amber-200">
              <Search className="w-5 h-5 text-amber-700" />
            </button>

            {navSections.map((section) =>
              section.hasDropdown ? (
                <DropdownMenu key={section.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none">
                    {section.label}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[180px]">
                    {section.items?.map((item) => (
                      <DropdownMenuItem key={item.label} asChild>
                        <a href={item.href} className="cursor-pointer">
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
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    section.active
                      ? 'text-saffron'
                      : 'text-muted-foreground hover:text-foreground'
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
                          className={`w-4 h-4 transition-transform ${
                            expandedMobileSection === section.label ? 'rotate-180' : ''
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
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        section.active
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
    </header>
  );
}
