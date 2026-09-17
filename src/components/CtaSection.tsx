import React from 'react';
import { ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

interface CtaSectionProps {
  onStartProject: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartProject }) => {
  return (
    <section id="cta" className="py-24 sm:py-32 relative bg-[#07090E] overflow-hidden">
      {/* Background glow and subtle vector geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00F0FF]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtle top indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F121A] border border-white/10 text-xs font-mono text-[#8E95A5] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="tracking-widest uppercase text-white/90">OPEN FOR COLLABORATION</span>
        </div>

        {/* Headline */}
        <h2
          id="cta-headline"
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
        >
          GOT AN IDEA?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00F0FF] to-white/90">
            LET’S BUILD IT.
          </span>
        </h2>

        {/* Supporting text */}
        <p
          id="cta-supporting-text"
          className="text-base sm:text-lg text-[#8E95A5] max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Have a website, app, AI concept or digital product in mind? Start with the idea. TYAGI Labs can help turn it into a working digital experience.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-start-project-btn"
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#00F0FF] text-[#08090C] font-semibold text-sm tracking-wider uppercase transition-all duration-200 hover:bg-[#38F5FF] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] active:scale-95 cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="tel:9897809329"
            id="cta-call-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0F121A] text-white border border-white/15 hover:border-[#00F0FF]/40 hover:bg-white/5 font-mono text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#00F0FF]" />
            <span>CALL 9897809329</span>
          </a>
        </div>
      </div>
    </section>
  );
};
