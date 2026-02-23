<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import { computed } from 'vue'
import { marked } from 'marked'
import { loadDocMarkdown, resolveDoc } from '~/utils/docs-loader'

const route = useRoute()
const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug)
const docEntry = computed(() => resolveDoc(slug.value ?? ''))

if (!docEntry.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Doc not found'
  })
}

const { data, error } = await useAsyncData(`doc-${slug.value}`, () => loadDocMarkdown(docEntry.value!))

if (error.value) {
  throw error.value
}

const renderedHtml = computed(() => {
  if (!data.value) {
    return ''
  }

  return marked.parse(data.value, { async: false }) as string
})
</script>

<template>
  <UContainer class="py-12 space-y-8">
    <section>
      <p class="text-sm font-medium text-primary">
        Docs
      </p>
      <h1 class="text-3xl font-bold mt-2">
        {{ docEntry?.title }}
      </h1>
      <p class="mt-3 text-muted max-w-3xl">
        {{ docEntry?.description }}
      </p>
    </section>

    <UCard>
      <article
        class="markdown-body"
        v-html="renderedHtml"
      />
    </UCard>
  </UContainer>
</template>
