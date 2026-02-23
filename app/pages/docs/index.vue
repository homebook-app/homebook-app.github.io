<script setup lang="ts">
import { docsEntries } from '~/data/docs'
</script>

<template>
  <UContainer class="py-12 space-y-8">
    <section>
      <h1 class="text-3xl font-bold">
        Docs
      </h1>
      <p class="mt-3 text-muted max-w-3xl">
        This page lists all documents from the mapping in <code>app/data/docs.ts</code>.
        Content can be loaded from local markdown files or remote sources (for example GitHub).
      </p>
    </section>

    <section class="grid gap-4 md:grid-cols-2">
      <UCard
        v-for="doc in docsEntries"
        :key="doc.slug"
        class="h-full"
      >
        <template #header>
          <h2 class="font-semibold text-lg">
            {{ doc.title }}
          </h2>
        </template>

        <p class="text-sm text-muted">
          {{ doc.description }}
        </p>

        <template #footer>
          <UButton
            :to="`/docs/${doc.slug}`"
            variant="ghost"
            trailing-icon="i-lucide-arrow-right"
          >
            Open Document
          </UButton>
        </template>
      </UCard>
    </section>
  </UContainer>
</template>
