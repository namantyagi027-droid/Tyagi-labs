import React, { useEffect, useState } from 'react';

export const PhilosophySection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="philosophy"
      className="py-32 sm:py-44 relative bg-[#07080C] overflow-hidden border-y border-white/[0.06]"
    >
      {/* Cinematic subtle central ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-r from-cyan-500/[0.04] via-indigo-500/[0.06] to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Abstract technical crosshairs */}
      <div className="absolute top-12 left-12 text-white/[0.07] font-mono text-xs select-none">
        + PERSPECTIVE // 00_CORE
      </div>
      <div className="absolute bottom-12 right-12 text-white/[0.07] font-mono text-xs select-none">
        LAB_DOCTRINE // PRECISION
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top small label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-mono text-[#8E95A5] uppercase tracking-[0.25em] mb-12">
          <span>STUDIO PHILOSOPHY</span>
        </div>

        {/* Big Bold Cinematic Statement */}
        <blockquote className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-12">
          DON’T JUST BUILD
          <br />
          SOMETHING THAT WORKS.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00F0FF] to-white/80">
            BUILD SOMETHING
            <br />
            WORTH EXPERIENCING.
          </span>
        </blockquote>

        {/* Below Statement with 3 Pillars */}
        <div className="pt-8 border-t border-white/[0.08] max-w-xl mx-auto">
          <p className="text-lg sm:text-xl font-mono text-[#8E95A5] tracking-widest uppercase flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <span className="text-white hover:text-[#00F0FF] transition-colors">
              Design matters.
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white hover:text-[#00F0FF] transition-colors">
              Performance matters.
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white hover:text-[#00F0FF] transition-colors">
              The details matter.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
