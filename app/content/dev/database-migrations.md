# Database Migrations

HomeBook uses **Prisma** for database access and schema management. This guide covers how migrations work and how to write safe ones.

## How It Works

```text
schema.prisma  ──►  prisma migrate dev  ──►  SQL migration files  ──►  Database
```

Every schema change produces a timestamped SQL file stored in `prisma/migrations/`.

## Running Migrations

### Development

```bash
# Apply pending migrations and regenerate the client
pnpm prisma migrate dev
```

### Production

```bash
# Apply migrations without prompts
pnpm prisma migrate deploy
```

### Reset (Development Only)

```bash
# Drop database, re-apply all migrations, run seed
pnpm prisma migrate reset
```

> ⚠️ **Never** run `migrate reset` against production.

## Writing a Migration

### Step 1 – Edit the Schema

```prisma
model Recipe {
  id          String   @id @default(cuid())
  title       String
  servings    Int
  prepTime    Int?
  cookTime    Int?
  difficulty  String?     // ← new field
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Step 2 – Generate

```bash
pnpm prisma migrate dev --name add-recipe-difficulty
```

This creates:

```text
prisma/migrations/
  20260317120000_add_recipe_difficulty/
    migration.sql
```

### Step 3 – Review the SQL

```sql
-- migration.sql
ALTER TABLE "Recipe" ADD COLUMN "difficulty" TEXT;
```

Always review the generated SQL before committing.

## Migration Rules

| ✅ Do                                    | ❌ Don't                                |
| ---------------------------------------- | --------------------------------------- |
| Add nullable columns                     | Drop columns without a data migration   |
| Add indexes for query performance        | Rename columns directly in production   |
| Use default values for required fields   | Run raw SQL that bypasses Prisma        |
| Test migrations on a copy of prod data   | Assume empty tables                     |

## Handling Data Migrations

For complex changes (renaming, splitting columns), use a **three-phase approach**:

1. **Expand** – Add the new column alongside the old one.
2. **Migrate** – Backfill data from old → new via a script.
3. **Contract** – Remove the old column once all reads have switched.

```bash
# Example backfill script
pnpm tsx scripts/backfill-difficulty.ts
```

## Seeding

The seed script populates a fresh database with sample data:

```bash
pnpm prisma db seed
```

Seed data is defined in `prisma/seed.ts`.

## Troubleshooting

| Problem                        | Solution                                      |
| ------------------------------ | --------------------------------------------- |
| Migration drift                | Run `prisma migrate diff` to inspect changes  |
| Failed migration               | Fix SQL, then `prisma migrate resolve`        |
| Schema out of sync             | Run `prisma db pull` to introspect            |
