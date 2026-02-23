export interface ReleaseNote {
  version: string
  date: string
  title: string
  highlights: string[]
}

export const releaseNotes: ReleaseNote[] = [
  {
    version: 'v0.6.0',
    date: '2026-02-10',
    title: 'Roadmap and Navigation Refresh',
    highlights: [
      'Added roadmap timeline and dedicated release section.',
      'Improved top-level navigation with feature hubs and docs entry points.',
      'Introduced a typed data layer for roadmap and changelog management.'
    ]
  },
  {
    version: 'v0.5.3',
    date: '2026-01-27',
    title: 'Feature Placeholder Foundations',
    highlights: [
      'Created dedicated module placeholders for Finances, Wiki, Meal Planning, Lists and Recipes.',
      'Prepared reusable card and preview layout patterns for future visual expansion.',
      'Improved responsive behavior across landing and feature pages.'
    ]
  },
  {
    version: 'v0.5.0',
    date: '2025-12-15',
    title: 'Docs Routing MVP',
    highlights: [
      'Added docs route mapping that resolves URLs to markdown files.',
      'Enabled local markdown loading and optional remote GitHub markdown support.',
      'Implemented markdown rendering style defaults for technical content.'
    ]
  },
  {
    version: 'v0.4.2',
    date: '2025-11-09',
    title: 'Landing Page Baseline',
    highlights: [
      'Initial landing page with project overview, features and onboarding summary.',
      'Published first public GitHub Pages deployment profile.',
      'Added baseline SEO metadata and open graph defaults.'
    ]
  }
]
