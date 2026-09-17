import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ArrowUpRight, Sparkles, Terminal, Globe, Cpu, X, Check, Eye } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'tyagi-portfolio',
      name: 'TYAGI PORTFOLIO',
      tagline: 'High-performance digital laboratory showcase',
      category: 'Web Experience',
      type: 'Personal Project',
      description:
        'A dark luxury technology studio experience emphasizing typographic hierarchy, sub-millisecond responsiveness, and mathematical spatial design without heavy rendering overhead.',
      highlights: [
        'Dark luxury aesthetic with near-black charcoal palette',
        'Lightweight 3D particle canvas reacting to cursor physics',
        'Zero-dependency SVG visual system with strict WCAG AA contrast',
        'Clean direct contact routing via instant telephone and WhatsApp protocols',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Canvas API'],
      abstractTheme: 'cyan',
    },
    {
      id: 'ariya-ai',
      name: 'ARIYA',
      tagline: 'Context-aware conversational intelligence concept',
      category: 'AI Interface',
      type: 'AI Assistant Concept',
      description:
        'An experimental interface exploring natural language command execution, minimalist ambient voice states, and intelligent contextual retrieval for creative knowledge workers.',
      highlights: [
        'Minimalist ambient voice waveform visualizer',
        'Streaming token state management with graceful fallback',
        'Context-aware command pallet with keyboard shortcuts',
        'Designed around ergonomics and distraction-free workflows',
      ],
      techStack: ['TypeScript', 'AI APIs', 'Web Audio API', 'React 19'],
      abstractTheme: 'violet',
    },
    {
      id: 'hyoriverse',
      name: 'HYORIVERSE',
      tagline: 'Decentralized spatial social canvas concept',
      category: 'Platform Concept',
      type: 'Platform Concept',
      description:
        'An exploratory social platform designed around collaborative digital boards, spatial audio presence, and modular digital identity badges without algorithmic feed clutter.',
      highlights: [
        'Infinite pan-and-zoom collaborative canvas geometry',
        'Real-time cursor presence and spatial proximity audio concept',
        'Privacy-first modular identity architecture',
        'Lightweight SVG vector avatar generation engine',
      ],
      techStack: ['Firebase Firestore', 'React', 'Tailwind CSS', 'WebSockets Concept'],
      abstractTheme: 'emerald',
    },
    {
      id: 'experimental-web',
      name: 'EXPERIMENTAL WEB',
      tagline: 'Suite of interactive algorithmic web studies',
      category: 'Interactive Lab',
      type: 'Interactive Experiment',
      description:
        'A continuous laboratory series investigating kinetic typography, fluid simulation shaders, procedural generative SVG meshes, and micro-interaction responsiveness.',
      highlights: [
        'Procedural trigonometric mesh deformation algorithms',
        'GPU-accelerated CSS perspective transform experiments',
        'Sensory sound synthesis via Web Audio oscillators',
        'Strict adherence to reduced-motion and accessibility bounds',
      ],
      techStack: ['HTML5 Canvas', 'CSS Houdini', 'TypeScript', 'Vector Math'],
      abstractTheme: 'amber',
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#0A0D14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#00F0FF] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>04 / SELECTED WORK</span>
            </div>

            <h2
              id="projects-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              EXPERIMENTS,
              <br />
              PRODUCTS &amp; BUILDS.
            </h2>
          </div>

          {/* Honest work status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#8E95A5]">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>PERSONAL &amp; EXPERIMENTAL CONCEPTS</span>
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group relative rounded-2xl bg-[#0F131C] border border-white/[0.08] hover:border-[#00F0FF]/40 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/50"
              >
                {/* Large Abstract Visual Area (Procedural CSS/SVG) */}
                <div className="relative w-full h-64 sm:h-72 bg-[#06080D] overflow-hidden flex items-center justify-center border-b border-white/[0.08]">
                  {/* Background grid */}
                  <div className="absolute inset-0 bg-tech-grid opacity-30" />

                  {/* Dynamic Abstract Visual Based on Project */}
                  {project.id === 'tyagi-portfolio' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-40 h-40 border border-[#00F0FF]/30 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-700 flex items-center justify-center">
                        <div className="w-28 h-28 border border-[#00F0FF]/50 rounded-xl -rotate-6 flex items-center justify-center bg-[#00F0FF]/5">
                          <span className="font-mono text-xs text-[#00F0FF] tracking-widest">
                            TYAGI.DEV
                          </span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/40">
                        RENDER_CORE: HIGH_FIDELITY
                      </div>
                    </div>
                  )}

                  {project.id === 'ariya-ai' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative flex items-center gap-1.5">
                        {[40, 65, 90, 45, 110, 75, 95, 35, 60].map((h, i) => (
                          <div
                            key={i}
                            className="w-1.5 rounded-full bg-gradient-to-t from-violet-600 to-cyan-400 transition-all duration-300 group-hover:scale-y-125"
                            style={{ height: `${h}px`, opacity: 0.8 + (i % 3) * 0.1 }}
                          />
                        ))}
                      </div>
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono text-violet-300 px-2 py-0.5 rounded bg-violet-950/60 border border-violet-800/40">
                        <Sparkles className="w-3 h-3" />
                        <span>AI MODEL CONTEXT</span>
                      </div>
                    </div>
                  )}

                  {project.id === 'hyoriverse' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border border-emerald-500/30 flex items-center justify-center relative">
                        <div className="w-32 h-32 rounded-full border border-dashed border-emerald-400/40 animate-spin" style={{ animationDuration: '24s' }} />
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/50 flex items-center justify-center">
                          <Globe className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="absolute top-2 right-4 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
                        <div className="absolute bottom-6 left-2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
                      </div>
                      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-emerald-400/70">
                        CANVAS_GRID // v1.2
                      </div>
                    </div>
                  )}

                  {project.id === 'experimental-web' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-44 h-36 flex flex-col justify-between py-2 border border-amber-500/20 bg-amber-500/5 rounded-lg p-3">
                        <div className="flex items-center justify-between text-[10px] font-mono text-amber-300">
                          <span>EXP_MATH.ts</span>
                          <Cpu className="w-3.5 h-3.5" />
                        </div>
                        <div className="space-y-1.5 font-mono text-[9px] text-white/50">
                          <div className="h-1 bg-white/20 rounded w-4/5" />
                          <div className="h-1 bg-amber-400/40 rounded w-3/5" />
                          <div className="h-1 bg-white/20 rounded w-full" />
                          <div className="h-1 bg-cyan-400/40 rounded w-2/3" />
                        </div>
                        <div className="text-[9px] font-mono text-amber-400">
                          DELTA_FPS: 60.00
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Type Badge Floating on Visual */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#08090C]/90 border border-white/10 text-[10px] font-mono tracking-wider text-[#F1F3F8] backdrop-blur-md">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono tracking-widest text-[#00F0FF] uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-2 group-hover:text-[#00F0FF] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-xs font-mono text-[#8E95A5] mb-4">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-[#8E95A5] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/[0.04] text-[#8E95A5] text-[10px] font-mono border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <button
                      id={`view-project-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="w-full group/btn flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-[#00F0FF] text-white hover:text-[#08090C] border border-white/10 hover:border-[#00F0FF] text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Eye className="w-3.5 h-3.5" />
                        <span>VIEW PROJECT DETAILS</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Inspector Modal */}
      {selectedProject && (
        <div
          id="project-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            id="project-modal-content"
            className="relative w-full max-w-2xl bg-[#0E1119] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-project-modal-btn"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#8E95A5] hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-mono text-[#00F0FF] tracking-widest uppercase block mb-1">
                {selectedProject.type} • {selectedProject.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                {selectedProject.name}
              </h3>
              <p className="text-sm font-mono text-[#8E95A5] mt-1">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Overview */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                Concept Overview
              </h4>
              <p className="text-sm sm:text-base text-[#8E95A5] leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                Key Architecture &amp; Execution
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                    <Check className="w-4 h-4 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2">
                Technical Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#626979]">
                TYAGI LABS • INDEPENDENT RESEARCH
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
