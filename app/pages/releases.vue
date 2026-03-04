<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import { computed } from 'vue'
import { marked } from 'marked'
import { releaseManifestEntries } from '~/data/releases-manifest'
import { loadReleaseMarkdown } from '~/utils/releases-loader'

interface ReleaseWithContent {
  version: string
  date: string
  title: string
  renderedHtml: string
}

function extractTitleFromMarkdown(markdown: string, fallback: string): string {
  const match = markdown.match(/^#\s+(.+)$/m)
  return match?.[1]?.trim() || fallback
}

const { data, error } = await useAsyncData('releases-content', async (): Promise<ReleaseWithContent[]> => {
  return Promise.all(
    releaseManifestEntries.map(async (entry) => {
      const markdown = await loadReleaseMarkdown(entry)

      return {
        version: entry.version,
        date: entry.date,
        title: extractTitleFromMarkdown(markdown, `Release ${entry.version}`),
        renderedHtml: marked.parse(markdown, { async: false }) as string
      }
    })
  )
})

if (error.value) {
  throw error.value
}

const releases = computed(() => data.value ?? [])
</script>

<template>
  <UContainer class="py-12 space-y-8">
    <section>
      <h1 class="text-3xl font-bold">
        Releases
      </h1>
      <p class="mt-3 text-muted max-w-3xl">
        All versions are loaded from <code>app/content/releases/releases.json</code>. The release content is
        rendered from the matching markdown file.
      </p>
    </section>

    <section class="space-y-4">
      <UCard
        v-for="release in releases"
        :key="release.version"
      >
        <template #header>
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 class="text-xl font-semibold">
                {{ release.title }}
              </h2>
              <p class="text-sm text-muted mt-1">
                {{ release.date }}
              </p>
            </div>
            <UBadge
              color="primary"
              variant="subtle"
            >
              Release
            </UBadge>
          </div>
        </template>

        <article
          class="markdown-body text-sm"
          v-html="release.renderedHtml"
        />
      </UCard>
    </section>
  </UContainer>
</template>
