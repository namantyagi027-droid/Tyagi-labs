import React, { useState } from 'react';
import { CapabilityItem } from '../types';
import { Code2, Cpu, Smartphone, Layout, Wrench } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const capabilities: CapabilityItem[] = [
    { name: 'HTML', category: 'core', description: 'Semantic, accessible, modern DOM structure' },
    { name: 'CSS', category: 'design', description: 'Modern layout engines, variables & design tokens' },
    { name: 'JavaScript', category: 'core', description: 'Modern ESNext, asynchronous patterns, reactivity' },
    { name: 'Python', category: 'backend', description: 'Scripting, backend logic & automation routines' },
    { name: 'Firebase', category: 'backend', description: 'Cloud Firestore, secure rules & cloud sync' },
    { name: 'Git', category: 'tooling', description: 'Version control, atomic commits, branch flow' },
    { name: 'GitHub', category: 'tooling', description: 'Repository workflows, CI/CD integration' },
    { name: 'AI APIs', category: 'ai', description: 'LLM integration, assistants & intelligent workflows' },
    { name: 'Responsive Design', category: 'design', description: 'Fluid breakpoints from mobile to 4K displays' },
    { name: 'UI/UX', category: 'design', description: 'Interaction design, visual hierarchy, ergonomics' },
    { name: 'Web Applications', category: 'core', description: 'Rich single-page architectures & real-time UI' },
    { name: 'Mobile Development', category: 'core', description: 'Cross-platform mobile apps & responsive viewports' },
  ];

  const categories = [
    { id: 'all', label: 'ALL CAPABILITIES' },
    { id: 'core', label: 'CORE & WEB' },
    { id: 'ai', label: 'AI & DATA' },
    { id: 'design', label: 'DESIGN & UI/UX' },
    { id: 'tooling', label: 'INFRASTRUCTURE' },
  ];

  const filteredCapabilities =
    activeCategory === 'all'
      ? capabilities
      : capabilities.filter((c) => c.category === activeCategory);

  return (
    <section id="capabilities" className="py-24 sm:py-32 relative bg-[#08090C] overflow-hidden">
      {/* Background tech grid */}
      <div className="absolute inset-0 bg-tech-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00F0FF] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>03 / CAPABILITIES</span>
            </div>

            <h2
              id="capabilities-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              TECHNICAL CAPABILITIES
              <br />
              &amp; CORE STACK.
            </h2>
          </div>

          {/* Honest disclaimer notice */}
          <div className="max-w-xs text-xs font-mono text-[#626979] border-l border-white/10 pl-4 py-1">
            Studio disciplines, modern frameworks and engineering tools utilized in active builds.
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF]'
                  : 'bg-[#0F121A] border-white/5 text-[#8E95A5] hover:text-white hover:border-white/15'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technology Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredCapabilities.map((tech, idx) => (
            <div
              key={tech.name}
              className="group relative rounded-xl bg-[#0D1017] border border-white/[0.07] hover:border-[#00F0FF]/40 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(0,240,255,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-[#626979] group-hover:text-[#00F0FF] transition-colors">
                    STACK_0{idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#00F0FF] transition-colors" />
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {tech.name}
                </h3>
              </div>

              <p className="text-xs text-[#8E95A5] leading-relaxed pt-3 border-t border-white/[0.04]">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
