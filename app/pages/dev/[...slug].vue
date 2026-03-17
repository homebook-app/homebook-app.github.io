<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import { computed } from 'vue'
import { marked } from 'marked'
import { loadDevMarkdown, resolveDev } from '~/utils/dev-loader'

const route = useRoute()
const slug = computed(() => {
  const paramsSlug = route.params.slug

  if (Array.isArray(paramsSlug)) {
    return paramsSlug.join('/')
  }

  return paramsSlug ?? ''
})
const devEntry = computed(() => resolveDev(slug.value))
const breadcrumbItems = computed(() => [
  { label: 'Home', to: '/' },
  { label: 'Dev', to: '/dev' },
  { label: devEntry.value?.title ?? 'Current Page', to: route.path }
])

if (!devEntry.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Dev page not found'
  })
}

const { data, error } = await useAsyncData(`dev-${slug.value}`, () => loadDevMarkdown(devEntry.value!))

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

      <div class="flex items-center gap-3 mt-4">
        <div
          v-if="devEntry?.icon"
          class="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary shrink-0"
        >
          <UIcon :name="devEntry.icon" class="size-5" />
        </div>
        <div>
          <h1 class="text-3xl font-bold">
            {{ devEntry?.title }}
          </h1>
        </div>
      </div>
      <p class="mt-3 text-muted max-w-3xl">
        {{ devEntry?.description }}
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
