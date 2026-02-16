import type { RoadmapItem } from './types';

export const roadmapItems: RoadmapItem[] = [
  {
    id: 'q1-2026-core',
    date: 'Q1 2026',
    status: 'progress',
    title: 'Stabilize Core Modules',
    summary:
      'Finance, family wiki, and meal planning as a robust baseline, including roles, permissions, and backup strategy.'
  },
  {
    id: 'q2-2026-mobile',
    date: 'Q2 2026',
    status: 'planned',
    title: 'Mobile App + Push Notifications',
    summary:
      'Native companion app with reminders for household tasks, meals, and recurring finance events.'
  },
  {
    id: 'q3-2026-automation',
    date: 'Q3 2026',
    status: 'planned',
    title: 'Automation Hub',
    summary:
      'Connect events and rules, for example creating calendar entries from meal-plan decisions.'
  },
  {
    id: 'q4-2026-ecosystem',
    date: 'Q4 2026',
    status: 'planned',
    title: 'Plugin Ecosystem',
    summary:
      'Extension model for community modules, external data sources, and integrations with existing homeserver setups.'
  }
];
