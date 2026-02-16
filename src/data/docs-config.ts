import type { DocEntry } from './types';

export const docsEntries: DocEntry[] = [
  {
    id: 'getting-started',
    type: 'markdown',
    group: 'Basics',
    label: 'Getting Started',
    path: 'docs/getting-started.md'
  },
  {
    id: 'feature-overview',
    type: 'markdown',
    group: 'Basics',
    label: 'Feature Overview',
    path: 'docs/feature-overview.md'
  },
  {
    id: 'domain-model',
    type: 'markdown',
    group: 'Development',
    label: 'Domain Models',
    path: 'docs/domain-model.md'
  },
  {
    id: 'openapi',
    type: 'openapi',
    group: 'API',
    label: 'REST API (OpenAPI)',
    path: 'docs/openapi.yaml'
  }
];
