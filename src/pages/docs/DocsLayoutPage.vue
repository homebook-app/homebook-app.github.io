<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { docsEntries } from '../../data/docs-config';

const route = useRoute();

const groupedDocs = computed<Record<string, typeof docsEntries>>(() => {
  return docsEntries.reduce<Record<string, typeof docsEntries>>((acc, entry) => {
    if (!acc[entry.group]) {
      acc[entry.group] = [];
    }
    acc[entry.group].push(entry);
    return acc;
  }, {} as Record<string, typeof docsEntries>);
});

function isActive(slug: string): boolean {
  return route.path === `/docs/${slug}`;
}
</script>

<template>
  <section class="panel">
    <header class="section-head">
      <p class="eyebrow">Documentation</p>
      <h1>Structured docs with dedicated pages</h1>
      <p>
        Each entry has its own route (e.g. <code>/docs/api</code>, <code>/docs/modules</code>). Maintain all
        structure through <code>src/data/docs-config.ts</code>.
      </p>
    </header>

    <div class="docs-layout">
      <aside class="docs-menu card">
        <section v-for="(entries, group) in groupedDocs" :key="group">
          <p class="docs-group-label">{{ group }}</p>
          <RouterLink
            v-for="entry in entries"
            :key="entry.id"
            :to="`/docs/${entry.slug}`"
            class="docs-item docs-link"
            :class="{ active: isActive(entry.slug) }"
          >
            {{ entry.label }}
          </RouterLink>
        </section>
      </aside>

      <article class="docs-content card">
        <RouterView />
      </article>
    </div>
  </section>
</template>
