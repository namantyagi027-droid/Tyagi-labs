import React, { useState } from 'react';
import { Phone, MessageSquare, ArrowUpRight, CheckCircle, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || 'Web Development'
  );
  const [projectBrief, setProjectBrief] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const phoneRaw = '9897809329';
  const phoneFormatted = '+91 9897809329';
  const telLink = `tel:${phoneRaw}`;

  const serviceOptions = [
    'Web Development',
    'Web Applications',
    'App Development',
    'UI / UX Design',
    'AI Experiences',
    'Digital Products',
  ];

  // Generate customized WhatsApp URL
  const generateWhatsAppLink = () => {
    let text = `Hello TYAGI Labs, I'd like to discuss a project.`;
    if (selectedService) {
      text += `\n\nInterest: ${selectedService}`;
    }
    if (projectBrief.trim()) {
      text += `\nBrief: ${projectBrief.trim()}`;
    }
    return `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#08090C] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#00F0FF]/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00F0FF] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span>06 / CONTACT</span>
          </div>

          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4"
          >
            LET’S BUILD SOMETHING.
          </h2>

          <p className="text-base sm:text-lg text-[#8E95A5]">
            Have an idea? Let’s start with a conversation.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Official Contact Card (Direct Phone & WhatsApp) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0E1119] border border-white/[0.1] p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
                  DIRECT LINE
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00F0FF]/10 text-[10px] font-mono text-[#00F0FF] border border-[#00F0FF]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              {/* Big Phone Number Display */}
              <div className="mb-6">
                <span className="text-xs font-mono text-[#626979] block mb-2">
                  PHONE / WHATSAPP:
                </span>
                <a
                  href={telLink}
                  id="contact-phone-big-link"
                  className="font-display text-3xl sm:text-4xl font-extrabold text-white hover:text-[#00F0FF] transition-colors tracking-tight block"
                >
                  {phoneRaw}
                </a>
                <span className="text-xs font-mono text-[#8E95A5] mt-1 block">
                  India (+91)
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#8E95A5] leading-relaxed mb-8">
                Connect directly with TYAGI Labs to discuss your project requirements, technical questions, or prototype concepts.
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-white/[0.08]">
              {/* Call Now */}
              <a
                href={telLink}
                id="contact-call-now-btn"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-mono text-sm tracking-wider uppercase transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#00F0FF]" />
                <span>CALL NOW</span>
              </a>

              {/* Chat on WhatsApp */}
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#00F0FF] hover:bg-[#38F5FF] text-[#08090C] font-semibold text-sm tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#00F0FF]/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              {/* Copy Phone to Clipboard */}
              <button
                onClick={handleCopyPhone}
                className="w-full py-2 text-center text-xs font-mono text-[#626979] hover:text-[#8E95A5] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied 9897809329</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy number ({phoneRaw})</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Project Brief Composer (Pre-fills WhatsApp / Direct Call) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0D1017] border border-white/[0.08] p-8">
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-white tracking-wide mb-2">
                START A PROJECT BRIEF
              </h3>
              <p className="text-xs sm:text-sm text-[#8E95A5]">
                Select what you’re building and send your initial thoughts straight to WhatsApp.
              </p>
            </div>

            {/* Service Selection Pills */}
            <div className="mb-6">
              <label className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-3">
                Project Focus
              </label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedService(opt)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer border ${
                      selectedService === opt
                        ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF]'
                        : 'bg-white/[0.03] border-white/10 text-[#8E95A5] hover:text-white hover:border-white/20'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Description Note */}
            <div className="mb-6">
              <label
                htmlFor="project-notes-input"
                className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-3"
              >
                Project Notes (Optional)
              </label>
              <textarea
                id="project-notes-input"
                rows={3}
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                placeholder="E.g., Looking to build an AI-powered SaaS dashboard / interactive web application..."
                className="w-full bg-[#08090C] border border-white/10 focus:border-[#00F0FF]/60 rounded-xl p-3.5 text-sm text-white placeholder-white/25 focus:outline-none transition-colors resize-none font-sans"
              />
            </div>

            {/* Instant Send via WhatsApp or Call */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="send-brief-whatsapp-btn"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#00F0FF] hover:bg-[#38F5FF] text-[#08090C] font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>SEND BRIEF TO WHATSAPP</span>
              </a>

              <a
                href={telLink}
                id="call-brief-btn"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00F0FF]" />
                <span>CALL DIRECT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
