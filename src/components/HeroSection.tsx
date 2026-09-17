import React from 'react';
import { ArrowUpRight, ChevronRight, Terminal, Layers } from 'lucide-react';
import { AbstractTechLabVisual } from './AbstractTechLabVisual';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreWork,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-28 flex flex-col justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00F0FF]/[0.035] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-[#6366F1]/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Studio Badge */}
            <div
              id="hero-studio-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F121A] border border-white/10 text-xs font-mono text-[#8E95A5] mb-6 shadow-sm hover:border-[#00F0FF]/30 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="tracking-[0.18em] uppercase text-[#F1F3F8]">
                INDEPENDENT TECHNOLOGY STUDIO
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-headline"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight leading-[1.08] text-white max-w-2xl mb-6"
            >
              WE BUILD DIGITAL EXPERIENCES THAT MOVE IDEAS FORWARD.
            </h1>

            {/* Supporting Paragraph */}
            <p
              id="hero-supporting-paragraph"
              className="text-base sm:text-lg text-[#8E95A5] leading-relaxed max-w-xl mb-9 font-normal"
            >
              TYAGI Labs builds modern websites, web applications, mobile apps, AI-powered experiences and custom digital products with a strong focus on design, usability and technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-9">
              <button
                id="hero-primary-btn"
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#00F0FF] text-[#08090C] font-semibold text-sm tracking-wider uppercase transition-all duration-200 hover:bg-[#38F5FF] hover:shadow-[0_0_25px_rgba(0,240,255,0.35)] active:scale-[0.98] cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                id="hero-secondary-btn"
                onClick={onExploreWork}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F121A] text-white border border-white/15 hover:border-white/30 hover:bg-white/[0.04] font-medium text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer"
              >
                <span>EXPLORE OUR WORK</span>
                <ChevronRight className="w-4 h-4 text-[#8E95A5] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>

            {/* Subtle Text Line under Buttons */}
            <div
              id="hero-discipline-line"
              className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono tracking-widest text-[#626979] border-t border-white/[0.06] pt-4 w-full max-w-lg"
            >
              <span>WEB</span>
              <span className="text-white/20">•</span>
              <span>APPS</span>
              <span className="text-white/20">•</span>
              <span>AI</span>
              <span className="text-white/20">•</span>
              <span>UI/UX</span>
              <span className="text-white/20">•</span>
              <span>DIGITAL PRODUCTS</span>
            </div>
          </div>

          {/* Right Column: Abstract Technical Lab Visual */}
          <div className="lg:col-span-5 w-full">
            <AbstractTechLabVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
