<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import { docsEntries } from '../../data/docs-config';
import type { DocEntry } from '../../data/types';

const route = useRoute();
const markdownHtml = ref<string>('<p>Loading documentation ...</p>');
const docsError = ref<string>('');

const sampleCalls = [
  {
    label: 'Health Check',
    code: 'curl -s https://api.homebook.local/health'
  },
  {
    label: 'Weekly Meal Plan',
    code: 'curl -H "Authorization: Bearer <token>" https://api.homebook.local/v1/meal-plan/week'
  }
];

const currentDoc = computed<DocEntry | undefined>(() => {
  const slug = String(route.params.slug ?? '');
  return docsEntries.find((entry) => entry.slug === slug);
});

async function loadCurrentDoc(): Promise<void> {
  const entry = currentDoc.value;
  docsError.value = '';
  markdownHtml.value = '<p>Loading documentation ...</p>';

  if (!entry) {
    docsError.value = 'Documentation entry not found.';
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

watch(
  () => route.params.slug,
  async () => {
    await loadCurrentDoc();
  }
);

onMounted(async () => {
  await loadCurrentDoc();
});
</script>

<template>
  <div>
    <h2>{{ currentDoc?.label }}</h2>
    <p v-if="currentDoc?.description" class="section-lead">{{ currentDoc.description }}</p>

    <div v-if="docsError" class="docs-error">{{ docsError }}</div>
    <div v-else-if="currentDoc?.type === 'markdown'" class="markdown" v-html="markdownHtml"></div>
    <div v-else class="swagger-shell">
      <div id="swagger-root"></div>
    </div>

    <section v-if="currentDoc?.slug === 'api'" class="demo-stack docs-inline-space">
      <header class="section-head">
        <h3>Developer Quickstart</h3>
      </header>
      <div class="card-grid three">
        <article v-for="call in sampleCalls" :key="call.label" class="card">
          <h3>{{ call.label }}</h3>
          <pre class="code-block"><code>{{ call.code }}</code></pre>
        </article>
      </div>
    </section>
  </div>
</template>
