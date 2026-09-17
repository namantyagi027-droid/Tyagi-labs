import React, { useState, useEffect } from 'react';
import { TechLogo } from './TechLogo';
import { ArrowUpRight, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onStartProjectClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProjectClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'projects', 'process', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    setMobileMenuOpen(false);
    if (onStartProjectClick) {
      onStartProjectClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090C]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <TechLogo size="md" />

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[#0F121A]/70 border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                id={`nav-link-${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-[#8E95A5] hover:text-[#F1F3F8] hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00F0FF]" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:9897809329"
            id="nav-quick-phone-btn"
            className="flex items-center gap-1.5 text-xs font-mono text-[#8E95A5] hover:text-[#00F0FF] transition-colors py-1 px-2.5 rounded border border-transparent hover:border-white/10"
            title="Call 9897809329"
          >
            <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>9897809329</span>
          </a>

          <button
            id="nav-start-project-btn"
            onClick={handleStartProject}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-[#00F0FF] text-white hover:text-[#08090C] text-xs font-semibold uppercase tracking-wider border border-white/15 hover:border-[#00F0FF] transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:9897809329"
            id="mobile-phone-icon-link"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00F0FF]"
            aria-label="Call TYAGI Labs at 9897809329"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#00F0FF] transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#0C0E14]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                id={`mobile-nav-${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`py-3 px-3 text-sm tracking-wider uppercase font-medium rounded-lg transition-colors flex items-center justify-between ${
                  activeSection === item.id
                    ? 'text-[#00F0FF] bg-white/[0.04]'
                    : 'text-[#8E95A5] hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-white/30">0{navItems.indexOf(item) + 1}</span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:9897809329"
                id="mobile-drawer-call-btn"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/5 border border-white/15 text-sm font-mono text-white"
              >
                <Phone className="w-4 h-4 text-[#00F0FF]" />
                <span>Call 9897809329</span>
              </a>

              <button
                id="mobile-drawer-start-btn"
                onClick={handleStartProject}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#00F0FF] text-[#08090C] text-sm font-semibold uppercase tracking-wider shadow-lg shadow-[#00F0FF]/20"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
