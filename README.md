# homebook-app.github.io

Vue 3 + TypeScript + Vite website for Homebook, including:
- Multi-page structure with Vue Router
- Intro/overview page
- Modules page
- Roadmap page
- Documentation page (Markdown + OpenAPI)

## Tech Stack

- Vue 3 (Single File Components)
- TypeScript (strict mode)
- Vite
- Swagger UI (`swagger-ui-dist`) for OpenAPI rendering
- Marked for Markdown rendering
- Vue Router (hash history, GitHub Pages friendly)
- Vuetify 3 (UI foundation, responsive navigation with hamburger menu)

## Development

### Option A: npm (recommended)

```bash
npm install
npm run dev
npm run typecheck
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Option B: static server (no npm)

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Content Maintenance

- Intro content: `src/data/site-content.ts`
- Module cards: `src/data/modules.ts`
- Roadmap items: `src/data/roadmap.ts`
- Docs navigation and types: `src/data/docs-config.ts`
- Markdown documents: `public/docs/*.md`
- OpenAPI spec: `public/docs/openapi.yaml`

## Routing / Page Structure

- `src/pages/HomePage.vue`
- `src/pages/ModulesPage.vue`
- `src/pages/RoadmapPage.vue`
- `src/pages/DocsPage.vue`
- Router config: `src/router.ts`

## Documentation Formats

- `type: "markdown"`: renders Markdown files from `public/docs`
- `type: "openapi"`: renders OpenAPI with Swagger UI

Add new documentation entries in `src/data/docs-config.ts` and place the corresponding files in `public/docs/`.
