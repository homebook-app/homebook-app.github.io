<script setup lang="ts">
const route = useRoute()

const navItems = [
  { label: 'Overview', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Roadmap', to: '/roadmap' },
  { label: 'Docs', to: '/docs' }
]

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Homebook'
const description = 'Homebook project site with overview, features, roadmap, releases and markdown-based docs.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <div
      class="site-bg"
      aria-hidden="true"
    />

    <header class="sticky top-0 z-30 border-b border-default bg-default/80 backdrop-blur">
      <UContainer class="py-2 md:py-0 md:h-16 flex flex-wrap items-center justify-between gap-2 md:gap-6">
        <NuxtLink
          to="/"
          class="shrink-0"
        >
          <AppLogo />
        </NuxtLink>

        <div class="flex items-center gap-1">
          <UColorModeButton />
          <UButton
            to="https://github.com"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          />
        </div>

        <nav class="w-full md:w-auto order-3 md:order-none overflow-x-auto">
          <div class="flex items-center gap-1 min-w-max">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="px-3 py-2 rounded-md text-sm transition-colors"
              :class="route.path === item.to || route.path.startsWith(`${item.to}/`)
                ? 'bg-primary/10 text-primary'
                : 'text-muted hover:text-highlighted hover:bg-elevated'"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </nav>
      </UContainer>
    </header>

    <UMain class="relative z-10">
      <NuxtPage />
    </UMain>

    <footer class="border-t border-default mt-10 relative z-10">
      <UContainer class="py-6 flex flex-wrap justify-between items-center gap-3 text-sm text-muted">
        <p>Homebook • {{ new Date().getFullYear() }}</p>
        <div class="flex items-center gap-4">
          <NuxtLink
            to="/releases"
            class="hover:text-highlighted transition-colors"
          >
            Releases
          </NuxtLink>
          <NuxtLink
            to="/docs"
            class="hover:text-highlighted transition-colors"
          >
            Docs
          </NuxtLink>
        </div>
      </UContainer>
    </footer>
  </UApp>
</template>
