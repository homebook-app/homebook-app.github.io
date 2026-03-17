# Testing Guide

HomeBook uses a layered testing strategy to keep the codebase reliable while maintaining fast feedback loops.

## Test Stack

| Layer         | Tool                  | Location            |
| ------------- | --------------------- | ------------------- |
| Unit          | Vitest                | `tests/unit/`       |
| Component     | Vitest + Vue Test Utils | `tests/components/` |
| Integration   | Vitest + Supertest    | `tests/integration/` |
| End-to-End    | Playwright            | `tests/e2e/`        |

## Running Tests

```bash
# All unit & integration tests
pnpm test

# Watch mode during development
pnpm test:watch

# End-to-end tests (requires running app)
pnpm test:e2e

# Coverage report
pnpm test:coverage
```

## Writing Unit Tests

Unit tests live next to the module they cover or in `tests/unit/`.

```typescript
// tests/unit/finance/calculate-balance.test.ts
import { describe, it, expect } from 'vitest'
import { calculateBalance } from '~/modules/finance/services/balance'

describe('calculateBalance', () => {
  it('sums positive and negative amounts', () => {
    const transactions = [
      { amount: 100, currency: 'EUR' },
      { amount: -30, currency: 'EUR' },
      { amount: -20, currency: 'EUR' }
    ]

    expect(calculateBalance(transactions)).toBe(50)
  })

  it('returns 0 for empty list', () => {
    expect(calculateBalance([])).toBe(0)
  })
})
```

## Writing Component Tests

```typescript
// tests/components/RecipeCard.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import RecipeCard from '~/components/RecipeCard.vue'

describe('RecipeCard', () => {
  it('renders recipe title', () => {
    const wrapper = mount(RecipeCard, {
      props: { title: 'Pasta Carbonara', servings: 4 }
    })

    expect(wrapper.text()).toContain('Pasta Carbonara')
  })

  it('emits "open" event on click', async () => {
    const wrapper = mount(RecipeCard, {
      props: { title: 'Pasta', servings: 2 }
    })

    await wrapper.find('[data-testid="open-btn"]').trigger('click')
    expect(wrapper.emitted('open')).toHaveLength(1)
  })
})
```

## Writing E2E Tests

```typescript
// tests/e2e/recipes.spec.ts
import { test, expect } from '@playwright/test'

test('user can create a recipe', async ({ page }) => {
  await page.goto('/recipes/new')
  await page.fill('[name="title"]', 'Test Recipe')
  await page.fill('[name="servings"]', '2')
  await page.click('button[type="submit"]')

  await expect(page.locator('.toast-success')).toBeVisible()
  await expect(page).toHaveURL(/\/recipes\/rec_/)
})
```

## Test Patterns

### Arrange / Act / Assert

Keep every test in three clear sections:

```typescript
it('formats currency correctly', () => {
  // Arrange
  const amount = 1234.5

  // Act
  const result = formatCurrency(amount, 'EUR')

  // Assert
  expect(result).toBe('€1,234.50')
})
```

### Factories

Use factory functions to create test data:

```typescript
import { createRecipe } from '~/tests/factories/recipe'

const recipe = createRecipe({ title: 'Custom Title' })
```

### Mocking

Prefer dependency injection over global mocks. When mocking is necessary:

```typescript
import { vi } from 'vitest'

const mockFetch = vi.fn().mockResolvedValue({ ok: true, json: () => ({}) })
vi.stubGlobal('fetch', mockFetch)
```

## Coverage Targets

| Module     | Minimum Coverage |
| ---------- | ---------------- |
| Core utils | 90%              |
| Services   | 80%              |
| Components | 70%              |
| E2E flows  | Critical paths   |

## CI Integration

Tests run automatically on every pull request via GitHub Actions. A PR cannot be merged if any test fails or coverage drops below thresholds.
