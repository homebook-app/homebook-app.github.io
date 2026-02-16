import type { ModuleInfo } from './types';

export const modules: ModuleInfo[] = [
  {
    id: 'finance',
    name: 'Finance',
    status: 'live',
    summary:
      'Track household budgets, recurring bookings, and category reports with a family-friendly data model.',
    tags: ['Budgets', 'Recurring entries', 'Reports']
  },
  {
    id: 'wiki',
    name: 'Family Wiki',
    status: 'live',
    summary:
      'Centralized household knowledge: procedures, recipes, manuals, and private notes with version history.',
    tags: ['Internal links', 'Versioning', 'Shared notes']
  },
  {
    id: 'meal-plan',
    name: 'Meal Planning',
    status: 'beta',
    summary:
      'Weekly meal planning with recipe context and shopping-list generation for daily coordination.',
    tags: ['Weekly plan', 'Recipe library', 'Shopping lists']
  },
  {
    id: 'tasks',
    name: 'Tasks & Routines',
    status: 'planned',
    summary:
      'Household routines, recurring chores, and reminders tied to members and rooms.',
    tags: ['Recurring tasks', 'Assignments', 'Notifications']
  },
  {
    id: 'automation',
    name: 'Automation Hub',
    status: 'planned',
    summary:
      'Rule-based workflows connecting events across modules and external systems.',
    tags: ['Rules engine', 'Webhooks', 'Cross-module events']
  },
  {
    id: 'integrations',
    name: 'Integrations',
    status: 'planned',
    summary:
      'Connect calendars, backup targets, and selected third-party services through a managed plugin layer.',
    tags: ['Calendar sync', 'Plugin API', 'External connectors']
  }
];
