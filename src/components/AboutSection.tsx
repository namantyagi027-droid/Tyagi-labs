import React from 'react';
import { Palette, Terminal, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'DESIGN',
      badge: 'PILLAR 01',
      description: 'Intentional visual architecture, spatial rhythm, and ergonomic interfaces.',
      focus: 'Clarity • Structure • Usability',
      icon: Palette,
      accent: 'border-[#00F0FF]/30 text-[#00F0FF]',
    },
    {
      title: 'CODE',
      badge: 'PILLAR 02',
      description: 'Modern web standards, modular TypeScript, responsive logic, and clean codebases.',
      focus: 'Performance • Resilience • Maintainability',
      icon: Terminal,
      accent: 'border-indigo-400/30 text-indigo-400',
    },
    {
      title: 'EXPERIMENT',
      badge: 'PILLAR 03',
      description: 'Testing bleeding-edge capabilities, AI workflows, and novel interface paradigms.',
      focus: 'Exploration • AI Models • Digital Prototypes',
      icon: Cpu,
      accent: 'border-cyan-400/30 text-cyan-400',
    },
    {
      title: 'REFINE',
      badge: 'PILLAR 04',
      description: 'Obsessive micro-interactions, responsive stress-testing, and detail-level polish.',
      focus: 'Precision • Speed • Cross-device Harmony',
      icon: Sparkles,
      accent: 'border-emerald-400/30 text-emerald-400',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle background grid accent */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00F0FF] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span>01 / ABOUT</span>
          </div>

          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-8"
          >
            FROM AN IDEA TO SOMETHING PEOPLE CAN USE.
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-[#8E95A5] leading-relaxed font-normal">
            <p>
              TYAGI Labs is an independent technology studio focused on turning ideas into practical digital experiences. From business websites and web applications to mobile products and experimental AI concepts, the goal is simple: create technology that looks refined, feels intuitive and actually works.
            </p>
            <p className="text-white/90 font-medium">
              We believe good digital products sit at the intersection of thoughtful design, useful technology and continuous experimentation.
            </p>
          </div>
        </div>

        {/* Studio Craft Pillars — Statistics-style visual without fake numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl bg-[#0E1118]/80 border border-white/[0.08] hover:border-[#00F0FF]/40 p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
              >
                {/* Top header with badge and icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#626979] px-2 py-1 rounded bg-white/[0.03] border border-white/5 uppercase">
                    {pillar.badge}
                  </span>
                  <div className={`p-2 rounded-lg bg-white/5 border ${pillar.accent}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Big Pillar Display Word */}
                <h3 className="font-display text-2xl font-bold text-white tracking-wider mb-3 group-hover:text-[#00F0FF] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8E95A5] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Bottom technical focus indicator */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-[#626979] group-hover:text-[#8E95A5] transition-colors">
                  <CheckCircle2 className="w-3 h-3 text-[#00F0FF]/80 flex-shrink-0" />
                  <span className="truncate">{pillar.focus}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
