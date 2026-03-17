# CI / CD Pipeline

HomeBook uses **GitHub Actions** for continuous integration and deployment. Every push and pull request triggers automated quality checks.

## Pipeline Overview

```text
Push / PR
   │
   ├─► Lint & Type Check
   │      ├── ESLint
   │      └── tsc --noEmit
   │
   ├─► Unit & Integration Tests
   │      └── Vitest + coverage
   │
   ├─► E2E Tests
   │      └── Playwright (Chromium, Firefox)
   │
   ├─► Build
   │      └── Nuxt generate (static)
   │
   └─► Deploy (main branch only)
          └── GitHub Pages
```

## Workflow Files

```text
.github/workflows/
├── ci.yml            # Runs on every push & PR
├── deploy.yml        # Deploys main to GitHub Pages
└── release.yml       # Creates GitHub releases on tags
```

## CI Workflow (`ci.yml`)

```yaml
name: CI
on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm typecheck
      - run: pnpm test --coverage

      - uses: actions/upload-artifact@v4
        with:
          name: coverage
          path: coverage/
```

## Deploy Workflow (`deploy.yml`)

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - run: pnpm install --frozen-lockfile
      - run: pnpm generate

      - uses: actions/upload-pages-artifact@v3
        with:
          path: .output/public

      - uses: actions/deploy-pages@v4
```

## Environment Variables

| Variable            | Scope      | Description                     |
| ------------------- | ---------- | ------------------------------- |
| `DATABASE_URL`      | CI / Prod  | PostgreSQL connection string    |
| `NUXT_PUBLIC_API`   | Build      | API base URL for the frontend   |
| `GITHUB_TOKEN`      | CI         | Auto-provided by GitHub Actions |

## Branch Protection

The `main` branch requires:

- ✅ All CI checks passing
- ✅ At least 1 approving review
- ✅ No force pushes
- ✅ Up-to-date with base branch

## Release Process

1. Merge feature branches into `main`.
2. Create a version tag: `git tag v1.2.0 && git push --tags`.
3. The `release.yml` workflow creates a GitHub Release with auto-generated notes.
4. The deploy workflow publishes the latest build to GitHub Pages.

## Monitoring

- **GitHub Actions dashboard** – View workflow runs and logs.
- **Codecov** – Coverage trends and PR annotations.
- **Dependabot** – Automated dependency updates with PR creation.
