import React from 'react';
import { ProcessStep } from '../types';
import { Search, Compass, Code, ShieldCheck, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps: (ProcessStep & { icon: React.ComponentType<{ className?: string }> })[] = [
    {
      number: '01',
      title: 'DISCOVER',
      description: 'Understand the idea, requirements and goal.',
      deliverable: 'Clarity on technical scope & core outcomes',
      icon: Search,
    },
    {
      number: '02',
      title: 'DESIGN',
      description: 'Structure the experience, interface and user flow.',
      deliverable: 'Visual hierarchy & interactive layouts',
      icon: Compass,
    },
    {
      number: '03',
      title: 'BUILD',
      description: 'Develop the website, application or digital product.',
      deliverable: 'Clean modular TypeScript & responsive code',
      icon: Code,
    },
    {
      number: '04',
      title: 'TEST',
      description: 'Check responsiveness, usability and functionality.',
      deliverable: 'Cross-browser & cross-device verification',
      icon: ShieldCheck,
    },
    {
      number: '05',
      title: 'REFINE',
      description: 'Polish details and improve the final experience.',
      deliverable: 'Subtle motion, performance & final touch',
      icon: Sparkles,
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 relative bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00F0FF] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span>05 / PROCESS</span>
          </div>

          <h2
            id="process-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            FROM FIRST IDEA
            <br />
            TO FINAL PRODUCT.
          </h2>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-8 right-8 h-[1px] bg-gradient-to-r from-[#00F0FF]/30 via-white/10 to-[#00F0FF]/30 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl bg-[#0D1017] border border-white/[0.07] hover:border-[#00F0FF]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 z-10"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#00F0FF]/10 flex items-center justify-center text-white group-hover:text-[#00F0FF] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-[#8E95A5] group-hover:text-[#00F0FF] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display text-xl font-bold text-white tracking-wide mb-3 group-hover:text-[#00F0FF] transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-[#8E95A5] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable info */}
                <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-[#626979] group-hover:text-[#8E95A5] transition-colors">
                  {step.deliverable}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
