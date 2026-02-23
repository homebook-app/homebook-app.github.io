<script setup lang="ts">
import { releaseNotes } from '~/data/releases'
</script>

<template>
  <UContainer class="py-12 space-y-8">
    <section>
      <h1 class="text-3xl font-bold">
        Releases
      </h1>
      <p class="mt-3 text-muted max-w-3xl">
        All versions are loaded from <code>app/data/releases.ts</code>. Add a new release by appending
        one more item to the array.
      </p>
    </section>

    <section class="space-y-4">
      <UCard
        v-for="release in releaseNotes"
        :key="release.version"
      >
        <template #header>
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 class="text-xl font-semibold">
                {{ release.version }} - {{ release.title }}
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

        <ul class="space-y-2 text-sm list-disc list-inside">
          <li
            v-for="highlight in release.highlights"
            :key="highlight"
          >
            {{ highlight }}
          </li>
        </ul>
      </UCard>
    </section>
  </UContainer>
</template>
