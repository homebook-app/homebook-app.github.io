<script setup lang="ts">
import { featureModules } from '~/data/features'
import HeroGraphicRotator from '~/components/HeroGraphicRotator.vue'
import InstallMethodSwitcher from '~/components/setup/InstallMethodSwitcher.vue'

const topModules = featureModules.slice(0, 3)
</script>

<template>
  <div class="space-y-16 py-10">
    <UContainer>
      <section class="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
        <div class="relative">
          <div class="hero-glow" aria-hidden="true" />

          <p class="text-sm font-semibold uppercase tracking-widest text-primary">
            Homebook
          </p>
          <h1 class="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            One platform for household and private daily tools
          </h1>
          <p class="mt-5 text-lg text-muted max-w-2xl">
            Homebook is a platform built for home and personal use. It brings practical tools together in one place,
            from finances and shared lists to meal planning, recipes and documentation. Expect a modular experience,
            a clear roadmap and flexible self-hosted deployment paths as the platform grows.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <UButton to="/#getting-started" trailing-icon="i-lucide-arrow-down">
              Getting Started
            </UButton>
            <UButton to="/features" color="neutral" variant="subtle">
              Explore Features
            </UButton>
          </div>
        </div>

        <HeroGraphicRotator />
      </section>
    </UContainer>

    <UContainer>
      <section class="space-y-6">
        <div>
          <h2 class="text-2xl font-semibold">
            Features
          </h2>
          <p class="text-muted mt-2">
            Each module already has a structured placeholder page and can now be expanded incrementally.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <UCard v-for="module in topModules" :key="module.slug" class="h-full">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="font-semibold">
                  {{ module.title }}
                </h3>
                <UIcon :name="module.icon" class="text-xl text-primary" />
              </div>
            </template>

            <p class="text-sm text-muted">
              {{ module.description }}
            </p>

            <template #footer>
              <UButton :to="`/features/${module.slug}`" variant="ghost" trailing-icon="i-lucide-arrow-right">
                View Details
              </UButton>
            </template>
          </UCard>
        </div>
      </section>
    </UContainer>

    <UContainer>
      <section id="getting-started" class="scroll-mt-28">
        <UCard class="overflow-hidden">
          <template #header>
            <div>
              <h3 class="text-2xl font-semibold">
                Getting Started
              </h3>
              <p class="text-sm text-muted mt-2 max-w-2xl">
                Choose your preferred installation method. The content below switches between platform-specific
                setup instructions while keeping a consistent structure.
              </p>
            </div>
          </template>

          <InstallMethodSwitcher />
        </UCard>
      </section>
    </UContainer>
  </div>
</template>
