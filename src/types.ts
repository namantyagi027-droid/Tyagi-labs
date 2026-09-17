export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface CapabilityItem {
  name: string;
  category: 'core' | 'backend' | 'ai' | 'tooling' | 'design';
  description: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  type: 'Personal Project' | 'AI Assistant Concept' | 'Platform Concept' | 'Interactive Experiment';
  description: string;
  highlights: string[];
  techStack: string[];
  abstractTheme: 'cyan' | 'violet' | 'emerald' | 'amber';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface QualityItem {
  title: string;
  subtitle: string;
  description: string;
}
