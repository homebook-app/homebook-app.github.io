export interface FeatureModule {
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  accent: string
  bullets: string[]
  isComingSoon: boolean
}

export const frontFeatures: FeatureModule[] = [
  {
    slug: 'finances',
    title: 'Finances',
    subtitle: 'Budgeting, tracking and smart overviews',
    description: 'Manage household budgets, recurring costs and spending categories in one structured dashboard.',
    icon: 'i-lucide-wallet',
    accent: 'from-emerald-500 to-teal-500',
    bullets: ['Monthly budget snapshots', 'Recurring payment tracking', 'Shared financial notes'],
    isComingSoon: false
  },
  {
    slug: 'wiki',
    title: 'Wiki',
    subtitle: 'Knowledge base for everything at home',
    description: 'Document routines, contacts, maintenance instructions and team knowledge with linkable pages.',
    icon: 'i-lucide-book-marked',
    accent: 'from-sky-500 to-blue-500',
    bullets: ['Structured pages with links', 'Search-ready article architecture', 'Visual graph preview placeholder'],
    isComingSoon: true
  },
  {
    slug: 'meal-planning',
    title: 'Meal Planning',
    subtitle: 'Plan meals with reusable weekly templates',
    description: 'Build and schedule meals, connect ingredients with shopping lists and track preparation tasks.',
    icon: 'i-lucide-utensils-crossed',
    accent: 'from-amber-500 to-orange-500',
    bullets: ['Weekly meal board', 'Template-based planning', 'Ingredient to list sync'],
    isComingSoon: false
  },
  {
    slug: 'lists',
    title: 'Lists',
    subtitle: 'Collaborative lists for daily workflows',
    description: 'Use shared checklists for shopping, chores and projects with statuses and ownership.',
    icon: 'i-lucide-list-checks',
    accent: 'from-violet-500 to-fuchsia-500',
    bullets: ['Realtime collaboration', 'Task ownership placeholders', 'Reusable list templates'],
    isComingSoon: false
  },
  {
    slug: 'recipes',
    title: 'Recipes',
    subtitle: 'Recipe vault with filters and steps',
    description: 'Store favorites, annotate instructions and connect recipes to your meal planning flow.',
    icon: 'i-lucide-cooking-pot',
    accent: 'from-rose-500 to-red-500',
    bullets: ['Recipe cards with metadata', 'Filter and tag placeholders', 'Cook-mode UI draft'],
    isComingSoon: false
  }
]

export const backFeatures: FeatureModule[] = [
  {
    slug: 'auth-permissions',
    title: 'Auth & Permissions',
    subtitle: 'Account scopes and access control',
    description: 'Define user roles, household memberships and capability boundaries for each module.',
    icon: 'i-lucide-shield-check',
    accent: 'from-indigo-500 to-blue-500',
    bullets: ['Role-based access model', 'Household-level permission scopes', 'Session and token lifecycle controls'],
    isComingSoon: false
  },
  {
    slug: 'sync-jobs',
    title: 'Sync & Jobs',
    subtitle: 'Background processing and reliability',
    description: 'Run imports, reminders and recalculation tasks with retry handling and execution tracking.',
    icon: 'i-lucide-refresh-cw',
    accent: 'from-cyan-500 to-sky-500',
    bullets: ['Queue-backed background jobs', 'Retry and failure visibility', 'Scheduled workflows and triggers'],
    isComingSoon: true
  },
  {
    slug: 'audit-observability',
    title: 'Audit & Observability',
    subtitle: 'Traceability and operational insight',
    description: 'Capture structured logs and domain events to improve debugging, support and change tracking.',
    icon: 'i-lucide-chart-line',
    accent: 'from-slate-500 to-zinc-500',
    bullets: ['Domain event timeline', 'Structured logs by module', 'Operational health checkpoints'],
    isComingSoon: false
  }
]
