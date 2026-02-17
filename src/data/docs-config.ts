import type { DocEntry } from './types';

export const docsEntries: DocEntry[] = [
  {
    id: 'getting-started',
    slug: 'getting-started',
    type: 'markdown',
    group: 'Basics',
    label: 'Getting Started',
    path: 'docs/getting-started.md',
    description: 'Installation, initial setup, and project orientation.'
  },
  {
    id: 'modules',
    slug: 'modules',
    type: 'markdown',
    group: 'Product',
    label: 'Modules',
    path: 'docs/feature-overview.md',
    description: 'Overview of Homebook modules and practical use cases.'
  },
  {
    id: 'domain-model',
    slug: 'domain-model',
    type: 'markdown',
    group: 'Development',
    label: 'Domain Models',
    path: 'docs/domain-model.md',
    description: 'Core objects, relationships, and implementation notes.'
  },
  {
    id: 'api',
    slug: 'api',
    type: 'openapi',
    group: 'API',
    label: 'REST API',
    path: 'docs/openapi.yaml',
    description: 'Interactive OpenAPI reference for all published endpoints.'
  }
];
