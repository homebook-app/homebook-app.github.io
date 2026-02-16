<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';

const route = useRoute();
const { mdAndDown } = useDisplay();

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
    <div class="app-shell">
      <div class="bg-orb bg-orb-a"></div>
      <div class="bg-orb bg-orb-b"></div>

      <v-app-bar class="site-header" flat>
        <template #prepend>
          <router-link to="/" class="brand" aria-label="Homebook homepage">
            <span class="brand-badge">HB</span>
            <span>
              <strong>Homebook</strong>
              <small>Private household platform</small>
            </span>
          </router-link>
        </template>

        <template #append>
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

          <v-app-bar-nav-icon
            class="d-md-none"
            aria-label="Open navigation"
            @click="drawer = !drawer"
          />
        </template>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="right"
        temporary
        class="mobile-drawer"
        :width="280"
        :scrim="mdAndDown"
      >
        <v-list nav density="comfortable">
          <v-list-item
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :active="isActive(item.to)"
            :title="item.label"
            rounded="xl"
          />
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <main class="page-wrap">
          <RouterView />
        </main>
      </v-main>

      <footer class="site-footer">
        <p>Homebook • Self-hosted software for families and households</p>
      </footer>
    </div>
  </v-app>
</template>
