export type RoadmapStatus = 'in_progress' | 'planned' | 'backlog'

export interface RoadmapItem {
  id: string
  title: string
  description: string
  target: string
  status: RoadmapStatus
  tags?: string[]
}

export const roadmapItems: RoadmapItem[] = [
  {
    id: 'wiki-search',
    title: 'Wiki Search & Link Graph',
    description: 'Full-text search, backlinks and smarter cross-references between pages.',
    target: 'Q2 2026',
    status: 'in_progress',
    tags: ['Wiki', 'UX']
  },
  {
    id: 'shared-lists',
    title: 'Shared Lists with Permissions',
    description: 'Family and team list collaboration with role-based permissions and activity history.',
    target: 'Q2 2026',
    status: 'in_progress',
    tags: ['Lists', 'Collaboration']
  },
  {
    id: 'meal-automation',
    title: 'Meal Plan Automation',
    description: 'Generate meal plans from preferences, pantry items and nutritional goals.',
    target: 'Q3 2026',
    status: 'planned',
    tags: ['Meal Planning', 'AI']
  },
  {
    id: 'finance-insights',
    title: 'Finance Insights Dashboard',
    description: 'Budget trends, category analytics and monthly forecast recommendations.',
    target: 'Q3 2026',
    status: 'planned',
    tags: ['Finances', 'Analytics']
  },
  {
    id: 'recipe-marketplace',
    title: 'Recipe Marketplace',
    description: 'Import, curate and share recipe packs across Homebook workspaces.',
    target: 'Q4 2026',
    status: 'backlog',
    tags: ['Recipes', 'Community']
  }
]

export const roadmapStatusMeta: Record<RoadmapStatus, { label: string, color: 'warning' | 'primary' | 'neutral' }> = {
  in_progress: {
    label: 'In Progress',
    color: 'warning'
  },
  planned: {
    label: 'Planned',
    color: 'primary'
  },
  backlog: {
    label: 'Backlog',
    color: 'neutral'
  }
}
