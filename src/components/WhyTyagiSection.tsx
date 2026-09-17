import React from 'react';
import { Sliders, Zap, Smartphone, Target, Eye, Sparkles } from 'lucide-react';
import { QualityItem } from '../types';

export const WhyTyagiSection: React.FC = () => {
  const qualities: (QualityItem & { icon: React.ComponentType<{ className?: string }> })[] = [
    {
      title: 'CUSTOM',
      subtitle: 'Precision Tailoring',
      description: 'No unnecessary one-size-fits-all approach. Every digital product is architected specifically around the concept.',
      icon: Sliders,
    },
    {
      title: 'MODERN',
      subtitle: 'Current Engineering',
      description: 'Contemporary interfaces and development practices. Clean codebases that stay fast and maintainable.',
      icon: Zap,
    },
    {
      title: 'RESPONSIVE',
      subtitle: 'Universal Ergonomics',
      description: 'Designed to work across phones, tablets and desktops with natural touch and cursor states.',
      icon: Smartphone,
    },
    {
      title: 'USEFUL',
      subtitle: 'Purpose-Driven',
      description: 'Technology should solve a real problem. No vanity bloat or decorative complexity without intent.',
      icon: Target,
    },
    {
      title: 'TRANSPARENT',
      subtitle: 'Honest Execution',
      description: 'Clear communication and honest project expectations. Direct collaboration from start to finish.',
      icon: Eye,
    },
    {
      title: 'CURIOUS',
      subtitle: 'Active Experimentation',
      description: 'Constant experimentation with new ideas and technologies to build modern, forward-thinking solutions.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 relative bg-[#08090C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00F0FF] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span>STUDIO STANDARD</span>
          </div>

          <h2
            id="why-us-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            BUILT AROUND
            <br />
            THE DETAILS.
          </h2>
        </div>

        {/* 6 Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((q) => {
            const Icon = q.icon;
            return (
              <div
                key={q.title}
                className="group relative rounded-2xl bg-[#0E1119] border border-white/[0.08] hover:border-[#00F0FF]/40 p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#00F0FF]/10 flex items-center justify-center text-white group-hover:text-[#00F0FF] transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#626979] tracking-widest uppercase">
                    {q.subtitle}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white tracking-wide mb-3 group-hover:text-[#00F0FF] transition-colors">
                  {q.title}
                </h3>

                <p className="text-sm text-[#8E95A5] leading-relaxed">
                  {q.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
