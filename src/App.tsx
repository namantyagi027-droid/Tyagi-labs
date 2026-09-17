import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScrollMoment } from './components/ScrollMoment';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProcessSection } from './components/ProcessSection';
import { WhyTyagiSection } from './components/WhyTyagiSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedServiceForBrief, setSelectedServiceForBrief] = useState<string>('Web Development');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    scrollToSection('contact');
  };

  const handleExploreWork = () => {
    scrollToSection('projects');
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForBrief(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F1F3F8] selection:bg-[#00F0FF]/20 selection:text-[#00F0FF] relative">
      {/* Top Fixed Sticky Navbar */}
      <Navbar onStartProjectClick={handleStartProject} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with 3D Technical Laboratory Visual */}
        <HeroSection
          onStartProject={handleStartProject}
          onExploreWork={handleExploreWork}
        />

        {/* 2. Scroll Moment */}
        <ScrollMoment />

        {/* 3. About Section (01 / ABOUT) */}
        <AboutSection />

        {/* 4. Services Section (02 / WHAT WE BUILD) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Capabilities Section (03 / CAPABILITIES) */}
        <CapabilitiesSection />

        {/* 6. Projects Section (04 / SELECTED WORK) */}
        <ProjectsSection />

        {/* 7. Philosophy Section */}
        <PhilosophySection />

        {/* 8. Process Section (05 / PROCESS) */}
        <ProcessSection />

        {/* 9. Why TYAGI Labs (Built Around the Details) */}
        <WhyTyagiSection />

        {/* 10. Dramatic Full-Width CTA */}
        <CtaSection onStartProject={handleStartProject} />

        {/* 11. Contact Section (06 / CONTACT) */}
        <ContactSection initialService={selectedServiceForBrief} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Pill for Direct Mobile / Desktop Access */}
      <aside
        id="floating-quick-contact"
        aria-label="Direct Studio Contact"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-1.5 p-1.5 rounded-full bg-[#0E121B]/90 border border-white/15 backdrop-blur-lg shadow-2xl"
      >
        <a
          href="https://wa.me/919897809329?text=Hello%20TYAGI%20Labs"
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#00F0FF] text-[#08090C] text-xs font-semibold uppercase tracking-wider hover:bg-[#38F5FF] transition-all shadow-md shadow-[#00F0FF]/20 cursor-pointer"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href="tel:9897809329"
          id="floating-call-btn"
          className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono text-[#8E95A5] hover:text-white hover:bg-white/5 transition-colors"
          title="Call 9897809329"
        >
          <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
          <span>9897809329</span>
        </a>
      </aside>
    </div>
  );
}
