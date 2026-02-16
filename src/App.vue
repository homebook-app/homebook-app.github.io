<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/modules', label: 'Modules' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/docs', label: 'Docs' }
];
</script>

<template>
  <div class="app-shell">
    <div class="bg-orb bg-orb-a"></div>
    <div class="bg-orb bg-orb-b"></div>

    <header class="site-header">
      <RouterLink to="/" class="brand" aria-label="Homebook homepage">
        <span class="brand-badge">HB</span>
        <span>
          <strong>Homebook</strong>
          <small>Private household platform</small>
        </span>
      </RouterLink>

      <nav class="site-nav">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ active: route.path === item.to }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </header>

    <main class="page-wrap">
      <RouterView v-slot="{ Component }">
        <Transition name="page-fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <footer class="site-footer">
      <p>Homebook • Self-hosted software for families and households</p>
    </footer>
  </div>
</template>
