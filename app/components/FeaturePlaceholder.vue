<script setup lang="ts">
import type { FeatureModule } from '~/data/features'

defineProps<{
  module: FeatureModule
}>()
</script>

<template>
  <UContainer class="py-12 space-y-10">
    <section class="grid gap-6 lg:grid-cols-[1.2fr_1fr] items-stretch">
      <UCard class="overflow-hidden border-0 shadow-xl ring-1 ring-default">
        <div :class="`h-full rounded-xl bg-gradient-to-br ${module.accent} p-8 text-white`">
          <div class="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            {{ module.title }}
          </div>
          <h1 class="mt-5 text-3xl font-semibold leading-tight">
            {{ module.subtitle }}
          </h1>
          <p class="mt-4 max-w-xl text-white/90">
            {{ module.description }}
          </p>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <div class="flex items-center justify-between gap-4">
            <h2 class="text-lg font-semibold">
              Planned Building Blocks
            </h2>
            <UIcon
              :name="module.icon"
              class="text-2xl text-primary"
            />
          </div>
        </template>

        <ul class="space-y-3">
          <li
            v-for="bullet in module.bullets"
            :key="bullet"
            class="flex items-start gap-3"
          >
            <UIcon
              name="i-lucide-check-circle-2"
              class="mt-0.5 text-primary"
            />
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </UCard>
    </section>

    <section class="grid gap-6 lg:grid-cols-3">
      <UCard class="lg:col-span-2">
        <template #header>
          <h3 class="text-base font-semibold">
            Visual Placeholder
          </h3>
        </template>

        <div class="placeholder-grid">
          <div class="placeholder-panel" />
          <div class="placeholder-panel" />
          <div class="placeholder-panel h-32 lg:col-span-2" />
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="text-base font-semibold">
            Integration Preview
          </h3>
        </template>

        <div class="space-y-3">
          <div class="placeholder-line w-4/5" />
          <div class="placeholder-line w-full" />
          <div class="placeholder-line w-3/4" />
          <div class="placeholder-line w-11/12" />
        </div>
      </UCard>
    </section>
  </UContainer>
</template>
