<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import { computed } from 'vue'
import { marked } from 'marked'
import { loadDocMarkdown, resolveDoc } from '~/utils/docs-loader'

const route = useRoute()
const slug = computed(() => {
  const paramsSlug = route.params.slug

  if (Array.isArray(paramsSlug)) {
    return paramsSlug.join('/')
  }

  return paramsSlug ?? ''
})
const docEntry = computed(() => resolveDoc(slug.value))
const breadcrumbItems = computed(() => [
  { label: 'Home', to: '/' },
  { label: 'Docs', to: '/docs' },
  { label: docEntry.value?.title ?? 'Current Page', to: route.path }
])

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
      <nav
        aria-label="Breadcrumb"
        class="flex flex-wrap items-center gap-2 text-sm text-muted"
      >
        <template
          v-for="(item, index) in breadcrumbItems"
          :key="item.to"
        >
          <NuxtLink
            v-if="index < breadcrumbItems.length - 1"
            :to="item.to"
            class="transition-colors hover:text-highlighted"
          >
            {{ item.label }}
          </NuxtLink>

          <span
            v-else
            class="text-highlighted"
            aria-current="page"
          >
            {{ item.label }}
          </span>

          <span
            v-if="index < breadcrumbItems.length - 1"
            aria-hidden="true"
          >
            /
          </span>
        </template>
      </nav>

      <h1 class="text-3xl font-bold mt-4">
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
