<script setup lang="ts">
import { backFeatures, frontFeatures } from '~/data/features'
</script>

<template>
  <UContainer class="py-12 space-y-8">
    <section
      class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/10 via-violet-500/5 to-transparent border border-violet-500/20 px-8 py-10">
      <div class="relative z-10">
        <span
          class="inline-flex items-center gap-2 text-xs font-medium text-violet-400 bg-violet-500/10 rounded-full px-3 py-1 mb-4">
          <UIcon name="i-lucide-sparkles" class="size-3.5" />
          Powerful Features
        </span>
        <h1 class="text-3xl font-bold">
          Features
        </h1>
        <p class="mt-3 text-muted max-w-3xl text-lg">
        Explore all planned HomeBook modules. Every page is already scaffolded with a structured placeholder,
        so you can iteratively add UI, data models and integrations.
        </p>
      </div>
      <div class="absolute -right-8 -top-8 size-48 rounded-full bg-violet-500/5 blur-3xl" />
      <div class="absolute -left-12 -bottom-12 size-32 rounded-full bg-violet-500/5 blur-2xl" />
    </section>

    <section class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <UCard v-for="module in frontFeatures" :key="module.slug" class="h-full">
        <template #header>
          <div class="flex items-center justify-between gap-3">
            <h2 class="font-semibold text-lg">
              {{ module.title }}
            </h2>
            <div class="flex items-center gap-2">
              <UBadge v-if="module.isComingSoon" color="warning" variant="subtle" size="sm">
                Coming soon
              </UBadge>
              <UIcon :name="module.icon" class="text-xl text-primary" />
            </div>
          </div>
        </template>

        <div class="space-y-3">
          <p class="text-sm font-medium text-toned">
            {{ module.subtitle }}
          </p>
          <div class="border-t border-default" />
          <p class="text-sm text-muted">
            {{ module.description }}
          </p>
        </div>

        <template v-if="!module.isComingSoon" #footer>
          <UButton :to="`/features/${module.slug}`" variant="ghost" trailing-icon="i-lucide-arrow-right">
            Show more
          </UButton>
        </template>
      </UCard>
    </section>

    <div class="space-y-4">
      <UCard v-for="module in backFeatures" :key="module.slug" class="w-full">
        <template #header>
          <div class="flex items-center justify-between gap-3">
            <h3 class="font-semibold text-lg">
              {{ module.title }}
            </h3>
            <div class="flex items-center gap-2">
              <UBadge v-if="module.isComingSoon" color="warning" variant="subtle" size="sm">
                Coming soon
              </UBadge>
              <UIcon :name="module.icon" class="text-xl text-primary" />
            </div>
          </div>
        </template>

        <div class="space-y-3">
          <p class="text-sm font-medium text-toned">
            {{ module.subtitle }}
          </p>
          <div class="border-t border-default" />
          <p class="text-sm text-muted">
            {{ module.description }}
          </p>
        </div>

        <template v-if="!module.isComingSoon" #footer>
          <UButton :to="`/features/${module.slug}`" variant="ghost" trailing-icon="i-lucide-arrow-right">
            Show more
          </UButton>
        </template>
      </UCard>
    </div>
  </UContainer>
</template>
