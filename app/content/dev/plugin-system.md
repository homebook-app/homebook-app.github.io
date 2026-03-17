# Plugin System

HomeBook's plugin system lets you extend the application with custom integrations, data sources and UI widgets.

## Architecture

Plugins are self-contained packages that hook into HomeBook via a defined lifecycle:

```text
┌───────────────────────────┐
│       HomeBook Core       │
│                           │
│  ┌─────────┐ ┌─────────┐ │
│  │ Plugin A │ │ Plugin B │ │
│  └────┬────┘ └────┬────┘ │
│       │            │      │
│  ┌────▼────────────▼────┐ │
│  │   Plugin Registry    │ │
│  └──────────────────────┘ │
└───────────────────────────┘
```

## Creating a Plugin

### 1. Scaffold

```bash
pnpm create homebook-plugin my-plugin
```

This generates:

```text
my-plugin/
├── src/
│   ├── index.ts          # Plugin entry point
│   ├── hooks.ts          # Lifecycle hooks
│   └── widgets/          # Optional UI widgets
├── manifest.json         # Plugin metadata
└── package.json
```

### 2. Define the Manifest

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "displayName": "My Plugin",
  "description": "A custom integration for HomeBook",
  "author": "Your Name",
  "hooks": ["onInit", "onRecipeCreate", "onTransactionCreate"],
  "permissions": ["recipes:read", "finance:read"]
}
```

### 3. Implement Hooks

```typescript
import { definePlugin } from '@homebook/plugin-sdk'

export default definePlugin({
  name: 'my-plugin',

  onInit(ctx) {
    console.log('Plugin initialized with context:', ctx.version)
  },

  onRecipeCreate(recipe) {
    // React to recipe creation
    // e.g. sync to external service
  }
})
```

## Available Hooks

| Hook                  | Trigger                         |
| --------------------- | ------------------------------- |
| `onInit`              | Plugin loaded for the first time |
| `onRecipeCreate`      | A new recipe is saved           |
| `onRecipeUpdate`      | An existing recipe is modified  |
| `onTransactionCreate` | A finance transaction is added  |
| `onListItemComplete`  | A to-do item is marked done     |
| `onUserLogin`         | A user session starts           |
| `onCronTick`          | Scheduled interval (1 min)      |

## Permissions

Plugins must declare which resources they need access to. Users are prompted to approve permissions on installation.

```
recipes:read    recipes:write
finance:read    finance:write
lists:read      lists:write
users:read
```

## Publishing

```bash
# Build and package
pnpm build

# Publish to the HomeBook registry
pnpm homebook-plugin publish
```

## Best Practices

- Keep plugins **small and focused** – one integration per plugin.
- Use **typed contracts** from the SDK to avoid runtime errors.
- Always handle errors gracefully – a failing plugin must not crash the host.
- Include a `README.md` with setup instructions and screenshots.
