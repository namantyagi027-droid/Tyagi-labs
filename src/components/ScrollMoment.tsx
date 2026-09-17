import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const ScrollMoment: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (windowHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, scrollY / 600)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stages = [
    { label: 'IDEAS', code: '01' },
    { label: 'DESIGN', code: '02' },
    { label: 'CODE', code: '03' },
    { label: 'PRODUCT', code: '04' },
  ];

  return (
    <div
      id="scroll-moment-ribbon"
      className="relative w-full border-y border-white/[0.08] bg-[#0A0D14]/70 backdrop-blur-md py-6 overflow-hidden select-none"
    >
      {/* Dynamic scan line based on scroll */}
      <div
        className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent transition-transform duration-300"
        style={{
          width: '40%',
          transform: `translateX(${scrollProgress * 150}%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm md:text-base font-mono tracking-[0.25em]">
          {stages.map((stage, idx) => (
            <React.Fragment key={stage.label}>
              <div className="flex items-center gap-2 group cursor-default">
                <span className="text-[10px] text-white/30 group-hover:text-[#00F0FF] transition-colors">
                  {stage.code}
                </span>
                <span className="font-semibold text-[#F1F3F8] group-hover:text-[#00F0FF] transition-colors tracking-[0.25em]">
                  {stage.label}
                </span>
              </div>

              {idx < stages.length - 1 && (
                <div className="flex items-center text-[#00F0FF]/60 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2] animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
