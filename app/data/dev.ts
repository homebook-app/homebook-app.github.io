export type DevSource
  = | { type: 'local', path: string }
    | { type: 'remote', url: string }

export interface DevEntry {
  slug: string
  title: string
  description: string
  icon: string
  source: DevSource
}

export const devEntries: DevEntry[] = [
  {
    slug: 'contributing',
    title: 'Contributing Guide',
    description: 'How to set up your development environment, fork the repo, and submit your first pull request.',
    icon: 'i-lucide-git-pull-request',
    source: {
      type: 'local',
      path: 'contributing.md'
    }
  },
  {
    slug: 'api-reference',
    title: 'REST API Reference',
    description: 'Full reference of all public REST endpoints including request/response schemas.',
    icon: 'i-lucide-braces',
    source: {
      type: 'local',
      path: 'api-reference.md'
    }
  },
  {
    slug: 'plugin-system',
    title: 'Plugin System',
    description: 'Build and register custom plugins to extend HomeBook with your own integrations.',
    icon: 'i-lucide-puzzle',
    source: {
      type: 'local',
      path: 'plugin-system.md'
    }
  },
  {
    slug: 'database-migrations',
    title: 'Database Migrations',
    description: 'How HomeBook handles schema evolution and how to write safe migration scripts.',
    icon: 'i-lucide-database',
    source: {
      type: 'local',
      path: 'database-migrations.md'
    }
  },
  {
    slug: 'testing-guide',
    title: 'Testing Guide',
    description: 'Unit, integration and end-to-end testing strategies used across the HomeBook codebase.',
    icon: 'i-lucide-flask-conical',
    source: {
      type: 'local',
      path: 'testing-guide.md'
    }
  },
  {
    slug: 'ci-cd-pipeline',
    title: 'CI / CD Pipeline',
    description: 'Overview of the GitHub Actions workflows for linting, testing, building and deploying.',
    icon: 'i-lucide-rocket',
    source: {
      type: 'local',
      path: 'ci-cd-pipeline.md'
    }
  }
]

export const devBySlug = Object.fromEntries(devEntries.map(entry => [entry.slug, entry]))
