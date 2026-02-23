export type DocSource
  = | { type: 'local', path: string }
    | { type: 'remote', url: string }

export interface DocEntry {
  slug: string
  title: string
  description: string
  source: DocSource
}

export const docsEntries: DocEntry[] = [
  {
    slug: 'module-development',
    title: 'Module Development',
    description: 'How to build new Homebook modules and integrate them in the app shell.',
    source: {
      type: 'local',
      path: 'module-development.md'
    }
  },
  {
    slug: 'architecture-overview',
    title: 'Architecture Overview',
    description: 'Project structure, data boundaries and deployment model.',
    source: {
      type: 'local',
      path: 'architecture-overview.md'
    }
  },
  {
    slug: 'integration-example',
    title: 'GitHub Integration Example',
    description: 'Example of loading docs markdown directly from a remote repository.',
    source: {
      type: 'remote',
      url: 'https://raw.githubusercontent.com/nuxt/nuxt/main/README.md'
    }
  }
]

export const docsBySlug = Object.fromEntries(docsEntries.map(entry => [entry.slug, entry]))
