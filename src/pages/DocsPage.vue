<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import { marked } from 'marked';
import { docsEntries } from '../data/docs-config';
import type { DocEntry } from '../data/types';

const markdownHtml = ref<string>('<p>Loading documentation ...</p>');
const currentDoc = ref<DocEntry | undefined>(docsEntries[0]);
const docsError = ref<string>('');

const groupedDocs = computed<Record<string, DocEntry[]>>(() => {
  return docsEntries.reduce<Record<string, DocEntry[]>>((acc, entry) => {
    if (!acc[entry.group]) {
      acc[entry.group] = [];
    }
    acc[entry.group].push(entry);
    return acc;
  }, {});
});

async function loadCurrentDoc(): Promise<void> {
  const entry = currentDoc.value;
  docsError.value = '';

  if (!entry) {
    return;
  }

  if (entry.type === 'markdown') {
    try {
      const response = await fetch(entry.path);
      if (!response.ok) {
        throw new Error(`Document not found: ${entry.path}`);
      }
      const markdown = await response.text();
      markdownHtml.value = marked.parse(markdown, { async: false });
    } catch (error) {
      docsError.value = error instanceof Error ? error.message : 'Failed to load markdown file.';
    }
    return;
  }

  markdownHtml.value = '';
  await nextTick();
  await import('swagger-ui-dist/swagger-ui.css');
  const { default: SwaggerUIBundle } = await import('swagger-ui-dist/swagger-ui-bundle');
  SwaggerUIBundle({
    url: entry.path,
    dom_id: '#swagger-root',
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis],
    layout: 'BaseLayout'
  });
}

function openDoc(entry: DocEntry): void {
  currentDoc.value = entry;
  void loadCurrentDoc();
}

onMounted(async () => {
  await loadCurrentDoc();
});
</script>

<template>
  <section class="panel docs-panel">
    <header class="section-head">
      <p class="eyebrow">Documentation</p>
      <h1>Single place for product and API docs</h1>
      <p>
        Navigation comes from <code>src/data/docs-config.ts</code>. Add Markdown or OpenAPI entries and keep
        structure maintainable.
      </p>
    </header>

    <div class="docs-layout">
      <aside class="docs-menu card">
        <section v-for="(entries, group) in groupedDocs" :key="group">
          <p class="docs-group-label">{{ group }}</p>
          <button
            v-for="entry in entries"
            :key="entry.id"
            class="docs-item"
            :class="{ active: currentDoc?.id === entry.id }"
            @click="openDoc(entry)"
          >
            {{ entry.label }}
          </button>
        </section>
      </aside>

      <article class="docs-content card">
        <h2>{{ currentDoc?.label }}</h2>
        <div v-if="docsError" class="docs-error">{{ docsError }}</div>
        <div v-else-if="currentDoc?.type === 'markdown'" class="markdown" v-html="markdownHtml"></div>
        <div v-else class="swagger-shell">
          <div id="swagger-root"></div>
        </div>
      </article>
    </div>
  </section>
</template>
