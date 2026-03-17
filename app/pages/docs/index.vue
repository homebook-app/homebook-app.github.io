<script setup lang="ts">
import { docsEntries } from '~/data/docs'
</script>

<template>
  <UContainer class="py-12 space-y-8">
    <section
      class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 px-8 py-10">
      <div class="relative z-10">
        <span
          class="inline-flex items-center gap-2 text-xs font-medium text-amber-400 bg-amber-500/10 rounded-full px-3 py-1 mb-4">
          <UIcon name="i-lucide-book-open" class="size-3.5" />
          Knowledge Resources
        </span>
        <h1 class="text-3xl font-bold">
          Documentation
        </h1>
        <p class="mt-3 text-muted max-w-3xl text-lg">
          Guides and references for users and contributors of HomeBook.
        </p>
      </div>
      <div class="absolute -right-8 -top-8 size-48 rounded-full bg-amber-500/5 blur-3xl" />
      <div class="absolute -left-12 -bottom-12 size-32 rounded-full bg-amber-500/5 blur-2xl" />
    </section>

    <section class="grid gap-4 md:grid-cols-2">
      <UCard v-for="doc in docsEntries" :key="doc.slug" class="h-full">
        <template #header>
          <h2 class="font-semibold text-lg">
            {{ doc.title }}
          </h2>
        </template>

        <p class="text-sm text-muted">
          {{ doc.description }}
        </p>

        <template #footer>
          <UButton :to="`/docs/${doc.slug}`" variant="ghost" trailing-icon="i-lucide-arrow-right">
            Open Document
          </UButton>
        </template>
      </UCard>
    </section>
  </UContainer>
</template>
