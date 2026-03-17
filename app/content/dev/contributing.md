# Contributing Guide

Welcome to the HomeBook contributor community! This guide walks you through everything you need to get started.

## Prerequisites

- **Node.js** 20+ and **pnpm** 9+
- **Docker** (for running the backend locally)
- A GitHub account with a fork of the main repo

## Setting Up Your Dev Environment

```bash
# 1. Clone your fork
git clone https://github.com/<your-user>/homebook.git
cd homebook

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Project Structure

```text
homebook/
├── app/               # Nuxt frontend
│   ├── components/    # Shared Vue components
│   ├── pages/         # File-based routing
│   ├── composables/   # Reusable logic
│   └── modules/       # Feature modules
├── server/            # Nitro API routes
├── prisma/            # Database schema & migrations
└── tests/             # Test suites
```

## Branch Naming Convention

| Type        | Pattern                     | Example                        |
| ----------- | --------------------------- | ------------------------------ |
| Feature     | `feat/<module>/<short-desc>` | `feat/recipes/import-from-url` |
| Bug Fix     | `fix/<module>/<short-desc>`  | `fix/finance/rounding-error`   |
| Docs        | `docs/<short-desc>`          | `docs/api-auth-section`        |
| Refactor    | `refactor/<short-desc>`      | `refactor/extract-composable`  |

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(recipes): add import from URL endpoint
fix(finance): correct decimal rounding in summary
docs: update contributing guide with branch naming
```

## Opening a Pull Request

1. Push your branch to your fork.
2. Open a PR against `main` on the upstream repo.
3. Fill in the PR template – describe **what** changed, **why**, and any **screenshots**.
4. CI will run linting, type checks and tests automatically.
5. A maintainer will review within 48 hours.

## Code Style

- **ESLint** enforces formatting – run `pnpm lint` before committing.
- Prefer composition API with `<script setup>`.
- Use TypeScript strict mode everywhere.

## Need Help?

Open a [Discussion](https://github.com/homebook-app/homebook/discussions) and tag it with `question`.
