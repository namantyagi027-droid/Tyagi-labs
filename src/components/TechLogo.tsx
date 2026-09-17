import React from 'react';

interface TechLogoProps {
  className?: string;
  showDescriptor?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const TechLogo: React.FC<TechLogoProps> = ({
  className = '',
  showDescriptor = true,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const descriptorSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  return (
    <a
      href="#home"
      id="brand-logo-link"
      className={`group flex items-center gap-3 select-none no-underline transition-opacity duration-200 hover:opacity-95 ${className}`}
      aria-label="TYAGI Labs - Home"
    >
      {/* Precision Geometric Abstract Tech Glyph */}
      <div
        className={`relative flex items-center justify-center rounded-lg bg-[#0F121A] border border-white/10 group-hover:border-[#00F0FF]/40 transition-all duration-300 shadow-sm ${iconSizes[size]}`}
      >
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle background tech grid in glyph */}
          <line x1="8" y1="16" x2="24" y2="16" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="16" y1="8" x2="16" y2="24" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          
          {/* Abstract futuristic 'T' + digital vector vertex */}
          <path
            d="M6 10H26"
            stroke="#F1F3F8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 10V24"
            stroke="#F1F3F8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Cyan experimental node */}
          <circle
            cx="24"
            cy="10"
            r="2"
            fill="#00F0FF"
            className="group-hover:scale-125 transition-transform duration-300"
          />
          {/* Subtle lower baseline accent */}
          <path
            d="M11 24H21"
            stroke="#00F0FF"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeDasharray="2 3"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-bold tracking-[0.08em] text-white leading-none ${textSizes[size]}`}
          >
            TYAGI
          </span>
          <span
            className={`font-display font-medium tracking-[0.14em] text-[#00F0FF] leading-none ${textSizes[size]}`}
          >
            LABS
          </span>
        </div>
        {showDescriptor && (
          <span
            className={`font-mono uppercase tracking-[0.22em] text-[#8E95A5] mt-1 font-normal ${descriptorSizes[size]}`}
          >
            INDEPENDENT TECHNOLOGY STUDIO
          </span>
        )}
      </div>
    </a>
  );
};
