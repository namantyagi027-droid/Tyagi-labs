import React from 'react';
import { TechLogo } from './TechLogo';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#05070A] border-t border-white/[0.08] pt-16 pb-12 text-[#8E95A5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/[0.06] items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col items-start">
            <TechLogo size="lg" />
            
            <p className="font-mono text-xs tracking-widest text-[#00F0FF] uppercase mt-4">
              “Web • Apps • AI • Digital Products”
            </p>

            <p className="text-sm text-[#8E95A5] max-w-sm mt-3 leading-relaxed">
              An independent technology studio focused on building digital products and continuously experimenting with modern technology.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    id={`footer-link-${link.label.toLowerCase()}`}
                    className="text-xs sm:text-sm text-[#8E95A5] hover:text-[#00F0FF] transition-colors tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:9897809329"
                id="footer-phone-link"
                className="flex items-center gap-2 text-sm font-mono text-white hover:text-[#00F0FF] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00F0FF]" />
                <span>9897809329</span>
              </a>

              <a
                href="https://wa.me/919897809329?text=Hello%20TYAGI%20Labs"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-link"
                className="flex items-center gap-2 text-sm font-mono text-[#8E95A5] hover:text-[#00F0FF] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#00F0FF]" />
                <span>WhatsApp: 9897809329</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#626979]">
          <p id="footer-copyright">
            © 2026 TYAGI Labs. Built with curiosity and code.
          </p>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
