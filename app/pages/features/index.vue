<script setup lang="ts">
import { featureModules } from '~/data/features'
</script>

<template>
  <UContainer class="py-12 space-y-8">
    <section>
      <h1 class="text-3xl font-bold">
        Features
      </h1>
      <p class="mt-3 text-muted max-w-3xl">
        Explore all planned Homebook modules. Every page is already scaffolded with a structured placeholder,
        so you can iteratively add UI, data models and integrations.
      </p>
    </section>

    <section class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <UCard
        v-for="module in featureModules"
        :key="module.slug"
        class="h-full"
      >
        <template #header>
          <div class="flex items-center justify-between gap-3">
            <h2 class="font-semibold text-lg">
              {{ module.title }}
            </h2>
            <UIcon
              :name="module.icon"
              class="text-xl text-primary"
            />
          </div>
        </template>

        <p class="text-sm text-muted">
          {{ module.description }}
        </p>

        <template #footer>
          <UButton
            :to="`/features/${module.slug}`"
            variant="ghost"
            trailing-icon="i-lucide-arrow-right"
          >
            Open Placeholder
          </UButton>
        </template>
      </UCard>
    </section>
  </UContainer>
</template>
