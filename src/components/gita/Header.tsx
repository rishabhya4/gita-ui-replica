import { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              {/* Om Symbol with Infinity */}
              <div className="relative">
                <span className="text-3xl font-heading text-saffron">ॐ</span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-lg text-teal-600">∞</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Search Icon */}
            <button className="p-2 hover:bg-muted rounded-lg transition-colors mr-4">
              <Search className="w-5 h-5 text-muted-foreground" />
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
