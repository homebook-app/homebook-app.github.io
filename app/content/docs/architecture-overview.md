# Architecture Overview

Homebook is organized around feature modules and shared infrastructure.

## Layers

- **Presentation**: Vue components and Nuxt pages.
- **Domain**: Feature-specific composables/services.
- **Data**: Storage adapters and sync integrations.
- **Platform**: Routing, auth, deployment and observability.

## Deployment

The public website is prepared for static deployment to GitHub Pages.

## Documentation Sources

Docs can come from:

- Local markdown files in the project.
- Remote markdown files from GitHub repositories.

Both options are configured in a single URL-to-source mapping.
