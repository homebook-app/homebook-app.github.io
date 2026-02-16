import type { HeroContent, IntroPoint } from './types';

export const hero: HeroContent = {
  title: 'A private control center for your home life.',
  subtitle:
    'Homebook combines planning, knowledge, and household operations on your own server. One platform, modular structure, transparent data ownership.',
  chips: ['Self-hosted by default', 'Vue + API-first architecture', 'Built for families', 'Modular rollout']
};

export const introPoints: IntroPoint[] = [
  {
    title: 'Operational clarity',
    text: 'Finances, household knowledge, and planning live in a single product language.'
  },
  {
    title: 'Data ownership',
    text: 'Run Homebook in your own environment and retain full control over private information.'
  },
  {
    title: 'Maintainable growth',
    text: 'Modules and documentation can evolve independently without rebuilding the entire frontend.'
  }
];
