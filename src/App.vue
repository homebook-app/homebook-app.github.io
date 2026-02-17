<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();
const drawer = ref(false);

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/modules', label: 'Modules' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/docs', label: 'Docs' }
];

function isActive(path: string): boolean {
  return route.path === path || route.path.startsWith(`${path}/`);
}

watch(
  () => route.path,
  () => {
    drawer.value = false;
  }
);
</script>

<template>
  <v-app class="hb-app">
    <div class="bg-orb bg-orb-a"></div>
    <div class="bg-orb bg-orb-b"></div>

    <header class="site-header-fixed">
      <div class="site-header">
        <div class="header-inner">
          <RouterLink to="/" class="brand" aria-label="Homebook homepage">
            <span class="brand-badge">HB</span>
            <span>
              <strong>Homebook</strong>
              <small>Private household platform</small>
            </span>
          </RouterLink>

          <nav class="site-nav d-none d-md-flex">
            <v-btn
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              variant="text"
              class="nav-link"
              :class="{ active: isActive(item.to) }"
              rounded="pill"
            >
              {{ item.label }}
            </v-btn>
          </nav>

          <button
            class="menu-toggle d-md-none"
            type="button"
            :class="{ open: drawer }"
            :aria-expanded="drawer ? 'true' : 'false'"
            aria-label="Toggle navigation"
            @click="drawer = !drawer"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <Transition name="mobile-menu">
          <nav v-if="drawer" class="mobile-menu d-md-none" aria-label="Mobile navigation">
            <RouterLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="mobile-menu-link"
              :class="{ active: isActive(item.to) }"
            >
              {{ item.label }}
            </RouterLink>
          </nav>
        </Transition>
      </div>
    </header>

    <div class="app-shell app-content">
      <main class="page-wrap">
        <RouterView />
      </main>
      <footer class="site-footer">
        <p>Homebook • Self-hosted software for families and households</p>
      </footer>
    </div>
  </v-app>
</template>
