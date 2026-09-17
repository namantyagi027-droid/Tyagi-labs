import React from 'react';
import {
  Globe,
  LayoutGrid,
  Smartphone,
  Layers,
  Sparkles,
  Cpu,
  ArrowUpRight,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services: (ServiceItem & { iconComponent: React.ComponentType<{ className?: string }> })[] = [
    {
      id: 'web-dev',
      number: '01',
      title: 'WEB DEVELOPMENT',
      description: 'Responsive websites and modern landing pages designed around real business goals.',
      tags: ['Modern Architecture', 'SEO Ready', 'High Performance'],
      icon: 'globe',
      iconComponent: Globe,
    },
    {
      id: 'web-apps',
      number: '02',
      title: 'WEB APPLICATIONS',
      description: 'Interactive web experiences and custom applications built around specific requirements.',
      tags: ['Single Page Apps', 'Dynamic Logic', 'Real-time UI'],
      icon: 'layout-grid',
      iconComponent: LayoutGrid,
    },
    {
      id: 'app-dev',
      number: '03',
      title: 'APP DEVELOPMENT',
      description: 'Mobile application concepts and products designed with usability and clean interfaces in mind.',
      tags: ['Cross-platform', 'Mobile UX', 'Touch First'],
      icon: 'smartphone',
      iconComponent: Smartphone,
    },
    {
      id: 'ui-ux',
      number: '04',
      title: 'UI / UX DESIGN',
      description: 'Modern interfaces with clear structure, thoughtful interactions and user-focused design.',
      tags: ['Design Systems', 'Prototyping', 'Ergonomics'],
      icon: 'layers',
      iconComponent: Layers,
    },
    {
      id: 'ai-exp',
      number: '05',
      title: 'AI EXPERIENCES',
      description: 'AI-powered interfaces, assistants, automations and experimental intelligent products.',
      tags: ['AI Assistants', 'Automations', 'Smart Flows'],
      icon: 'sparkles',
      iconComponent: Sparkles,
    },
    {
      id: 'dig-prod',
      number: '06',
      title: 'DIGITAL PRODUCTS',
      description: 'Custom ideas transformed into prototypes, experiments and usable digital experiences.',
      tags: ['Concept Prototypes', 'Experimental Web', 'MVPs'],
      icon: 'cpu',
      iconComponent: Cpu,
    },
  ];

  const handleCardClick = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00F0FF] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span>02 / WHAT WE BUILD</span>
          </div>

          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            DIGITAL PRODUCTS,
            <br />
            BUILT WITH PURPOSE.
          </h2>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.iconComponent;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => handleCardClick(service.title)}
                className="group relative rounded-2xl bg-[#0F121A]/80 border border-white/[0.08] hover:border-[#00F0FF]/40 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(0,240,255,0.12)] cursor-pointer"
              >
                {/* Subtle top corner tech bracket */}
                <div className="absolute top-3 right-3 text-[10px] font-mono text-white/20 group-hover:text-[#00F0FF]/60 transition-colors">
                  SYS_{service.number}
                </div>

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[#8E95A5] group-hover:text-[#00F0FF] transition-colors tracking-wider">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#00F0FF]/30 group-hover:bg-[#00F0FF]/10 flex items-center justify-center text-[#F1F3F8] group-hover:text-[#00F0FF] transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-xl font-bold text-white tracking-wide mb-3 group-hover:text-[#00F0FF] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#8E95A5] leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Line with Arrow */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-[#626979] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#00F0FF] flex items-center justify-center text-white group-hover:text-[#08090C] transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
