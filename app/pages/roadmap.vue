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
    <section>
      <h1 class="text-3xl font-bold">
        Roadmap
      </h1>
      <p class="mt-3 text-muted max-w-3xl">
        This timeline is powered by an editable TypeScript array in <code>app/data/roadmap.ts</code>.
      </p>
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

          <ul class="space-y-2 text-sm text-muted list-disc list-inside">
            <li v-for="note in release.highlights.slice(0, 2)" :key="note">
              {{ note }}
            </li>
          </ul>
        </UCard>
      </div>
    </section>
  </UContainer>
</template>
