<script setup lang="ts">
import { devEntries } from '~/data/dev'
</script>

<template>
    <UContainer class="py-12 space-y-10">
        <section
            class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 px-8 py-10">
            <div class="relative z-10">
                <span
                    class="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full px-3 py-1 mb-4">
                    <UIcon name="i-lucide-code-2" class="size-3.5" />
                    Developer Resources
                </span>
                <h1 class="text-3xl font-bold">
                    Dev
                </h1>
                <p class="mt-3 text-muted max-w-3xl text-lg">
                    Guides, references and best practices for developers contributing to HomeBook.
                    Everything you need to get up and running quickly.
                </p>
            </div>
            <div class="absolute -right-8 -top-8 size-48 rounded-full bg-emerald-500/5 blur-3xl" />
            <div class="absolute -left-12 -bottom-12 size-32 rounded-full bg-emerald-500/5 blur-2xl" />
        </section>

        <section class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <UCard v-for="entry in devEntries" :key="entry.slug"
                class="h-full group hover:border-emerald-500/30 transition-colors">
                <template #header>
                    <div class="flex items-start gap-3">
                        <div
                            class="flex items-center justify-center size-10 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                            <UIcon :name="entry.icon" class="size-5" />
                        </div>
                        <h2 class="font-semibold text-lg leading-snug">
                            {{ entry.title }}
                        </h2>
                    </div>
                </template>

                <p class="text-sm text-muted">
                    {{ entry.description }}
                </p>

                <template #footer>
                    <UButton :to="`/dev/${entry.slug}`" variant="ghost" trailing-icon="i-lucide-arrow-right">
                        Read Guide
                    </UButton>
                </template>
            </UCard>
        </section>
    </UContainer>
</template>
