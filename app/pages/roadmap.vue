<script setup lang="ts">
import { computed } from 'vue'
import { roadmapItems, roadmapStatusMeta } from '~/data/roadmap'
import { releaseManifestEntries } from '~/data/releases-manifest'
import { loadReleaseMarkdown } from '~/utils/releases-loader'

interface RoadmapRelease {
  version: string
  date: string
  title: string
  highlights: string[]
}

function extractTitleFromMarkdown(markdown: string, fallback: string): string {
  const match = markdown.match(/^#\s+(.+)$/m)
  return match?.[1]?.trim() || fallback
}

function extractHighlightsFromMarkdown(markdown: string): string[] {
  const changesSection = markdown.match(/^##\s+Changes\s*([\s\S]*?)(?:^##\s+|$)/m)?.[1] ?? markdown
  const highlights = changesSection
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^[-*]\s+/.test(line))
    .map((line) => line.replace(/^[-*]\s+/, ''))

  return highlights.length > 0 ? highlights : ['No change summary available yet.']
}

const { data, error } = await useAsyncData('roadmap-latest-releases', async (): Promise<RoadmapRelease[]> => {
  return Promise.all(
    releaseManifestEntries.map(async (entry) => {
      const markdown = await loadReleaseMarkdown(entry)

      return {
        version: entry.version,
        date: entry.date,
        title: extractTitleFromMarkdown(markdown, `Release ${entry.version}`),
        highlights: extractHighlightsFromMarkdown(markdown)
      }
    })
  )
})

if (error.value) {
  throw error.value
}

const latestReleases = computed(() => {
  const releases = data.value ?? []
  return [...releases]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)
})
</script>

<template>
  <UContainer class="py-12 space-y-12">
    <section
      class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-transparent border border-yellow-500/20 px-8 py-10">
      <div class="relative z-10">
        <span
          class="inline-flex items-center gap-2 text-xs font-medium text-yellow-400 bg-yellow-500/10 rounded-full px-3 py-1 mb-4">
          <UIcon name="i-lucide-map" class="size-3.5" />
          Roadmap and Releases
        </span>
        <h1 class="text-3xl font-bold">
          Roadmap
        </h1>
        <p class="mt-3 text-muted max-w-3xl text-lg">
          All coming features, improvements and releases of HomeBook in a clear timeline. This roadmap is a living document and will be continuously updated as we progress with development.
        </p>
      </div>
      <div class="absolute -right-8 -top-8 size-48 rounded-full bg-yellow-500/5 blur-3xl" />
      <div class="absolute -left-12 -bottom-12 size-32 rounded-full bg-yellow-500/5 blur-2xl" />
    </section>

    <section class="space-y-6">
      <h2 class="text-2xl font-semibold">
        Vertical Timeline
      </h2>

      <div class="timeline">
        <article v-for="item in roadmapItems" :key="item.id" class="timeline-item">
          <div class="timeline-dot" />
          <UCard class="timeline-card">
            <template #header>
              <div class="flex flex-wrap items-center gap-3 justify-between">
                <h3 class="font-semibold text-lg">
                  {{ item.title }}
                </h3>
                <UBadge :color="roadmapStatusMeta[item.status].color" variant="subtle">
                  {{ roadmapStatusMeta[item.status].label }}
                </UBadge>
              </div>
            </template>

            <p class="text-sm text-muted">
              {{ item.description }}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
              <UBadge color="neutral" variant="outline">
                {{ item.target }}
              </UBadge>
              <UBadge v-for="tag in item.tags" :key="tag" color="primary" variant="soft">
                {{ tag }}
              </UBadge>
            </div>
          </UCard>
        </article>
      </div>
    </section>

    <section class="space-y-4">
      <div class="flex items-end justify-between gap-4">
        <div>
          <h2 class="text-2xl font-semibold">
            Latest 3 Release Notes
          </h2>
          <p class="text-sm text-muted">
            Full release history is available on the Releases page.
          </p>
        </div>

        <UButton to="/releases" color="neutral" variant="outline" trailing-icon="i-lucide-arrow-right">
          All Releases
        </UButton>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <UCard v-for="release in latestReleases" :key="release.version">
          <template #header>
            <div class="space-y-1">
              <p class="font-semibold">
                {{ release.version }}
              </p>
              <p class="text-xs text-muted">
                {{ release.date }}
              </p>
            </div>
          </template>

          <p class="text-sm font-medium">
            {{ release.title }}
          </p>

          <ul class="space-y-2 text-sm text-muted list-disc list-inside">
            <li v-for="note in release.highlights.slice(0, 2)" :key="note">
              {{ note }}
            </li>
          </ul>

          <UButton class="mt-4" :to="`/releases#${release.version}`" color="neutral" variant="outline" size="sm"
            trailing-icon="i-lucide-arrow-right">
            Show Release
          </UButton>
        </UCard>
      </div>
    </section>
  </UContainer>
</template>
