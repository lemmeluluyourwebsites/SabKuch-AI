/**
 * Central Brand Configuration for SabKuch AI.
 * All brand text, contact info, assets, and service data are centralized here.
 * Never hardcode these values across components.
 */

export interface ServiceItemData {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  visualType: 'website' | 'automation' | 'agent' | 'chatbot';
  highlights: string[];
}

export interface ProcessStepData {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface PrincipleData {
  number: string;
  title: string;
  description: string;
}

export interface NavItemData {
  label: string;
  href: string;
}

export const BRAND_ASSETS = {
  logo: '/assets/sabkuch-alien.jpg',
  logoMark: '/assets/sabkuch-alien-transparent.png',
  favicon: '/favicon.png',
  referenceImages: [
    '/assets/sabkuch-alien.jpg'
  ]
} as const;

export const BRAND_CONFIG = {
  name: 'SabKuch AI',
  positioning: 'We collaborate with brands to solve real-world problems through AI.',
  tagline: 'Same Intelligence. More Possibilities.',
  secondaryTagline: 'AI for a better tomorrow.',
  description:
    'SabKuch AI collaborates with brands to solve real-world problems through practical AI solutions, from intelligent websites and chatbots to automation systems and AI agents.',
  
  email: 'tirthbusiness9@gmail.com',
  phones: [
    { display: '8591707971', raw: '8591707971', label: 'Primary' },
    { display: '9867656115', raw: '9867656115', label: 'Secondary' }
  ],

  services: ['Websites', 'Automations', 'Agents', 'Chatbots'] as const,

  colors: {
    background: '#060707',
    surface: '#0d0f0e',
    surfaceElevated: '#131715',
    primary: '#85fe01', // Reference-derived neon lime from logo
    primaryGlow: 'rgba(133, 254, 1, 0.28)',
    text: '#f5f7f6',
    textSecondary: '#9ca3af',
    textMuted: '#6b7280',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(133, 254, 1, 0.4)'
  },

  assets: BRAND_ASSETS
} as const;

export const NAV_ITEMS: NavItemData[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' }
];

export const SERVICES: ServiceItemData[] = [
  {
    number: '01',
    id: 'websites',
    title: 'WEBSITES',
    tagline: 'Intelligent digital architecture',
    description:
      'Intelligent, high-quality websites designed around your brand, user experience, and core business objectives. Built with modern performance, interactive poise, and AI-assisted workflows.',
    visualType: 'website',
    highlights: ['Bespoke UX/UI Design', 'AI Workflow Integrations', 'High-Performance Engineering']
  },
  {
    number: '02',
    id: 'automations',
    title: 'AUTOMATIONS',
    tagline: 'Frictionless operational pipelines',
    description:
      'Automated workflows that reduce repetitive manual work and seamlessly connect the digital tools your business already relies on everyday, eliminating friction and human error.',
    visualType: 'automation',
    highlights: ['Multi-tool Orchestration', 'Data Pipelines', 'Trigger & Event Syncing']
  },
  {
    number: '03',
    id: 'agents',
    title: 'AI AGENTS',
    tagline: 'Autonomous task-driven systems',
    description:
      'Task-oriented AI agents engineered to handle critical business processes, analyze unstructured data, and execute multi-step operations with minimal manual oversight.',
    visualType: 'agent',
    highlights: ['Context-Aware Execution', 'Workflow Hand-offs', 'Custom Reasoning Loops']
  },
  {
    number: '04',
    id: 'chatbots',
    title: 'CHATBOTS',
    tagline: 'Conversational intelligence',
    description:
      'High-fidelity conversational AI experiences that help your customers instantly find answers, receive personalized support, and interact naturally with your brand.',
    visualType: 'chatbot',
    highlights: ['Brand-aligned Voice', 'Domain Knowledge RAG', 'Instant Multi-channel Support']
  }
];

export const PROCESS_STEPS: ProcessStepData[] = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Understand the core reality',
    description:
      'We dissect the underlying problem, user workflows, organizational bottlenecks, and the precise outcome required before writing a single line of code.'
  },
  {
    step: '02',
    title: 'DESIGN',
    subtitle: 'Architect the AI system',
    description:
      'We define the optimal AI-powered approach tailored around your real operational constraints, eliminating unnecessary complexity.'
  },
  {
    step: '03',
    title: 'BUILD',
    subtitle: 'Precision engineering',
    description:
      'We develop the website, automation pipeline, agent, or conversational system with clean architecture, enterprise reliability, and strict quality control.'
  },
  {
    step: '04',
    title: 'REFINE',
    subtitle: 'Battle-test & deploy',
    description:
      'We rigorously test, calibrate prompts and logic, iterate on real feedback, and ensure smooth deployment for dependable, real-world operation.'
  }
];

export const PRINCIPLES: PrincipleData[] = [
  {
    number: '01',
    title: 'PROBLEM FIRST',
    description:
      'Technology starts with the problem, never the trend. We do not chase novelty for its own sake; every AI capability must serve an explicit operational purpose.'
  },
  {
    number: '02',
    title: 'BUILT AROUND THE BRAND',
    description:
      'Solutions must fit the distinctive identity and workflows of your business, rather than forcing your operations into rigid off-the-shelf templates.'
  },
  {
    number: '03',
    title: 'PRACTICAL AI',
    description:
      'We deploy AI exclusively where it genuinely improves a customer experience, saves human hours, or unlocks measurable business value.'
  },
  {
    number: '04',
    title: 'ITERATIVE BUILDING',
    description:
      'Real-world systems succeed through controlled validation and continuous refinement. We build, test with actual data, and calibrate until it performs seamlessly.'
  }
];
