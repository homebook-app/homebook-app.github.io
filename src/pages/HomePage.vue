<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { hero, introPoints } from '../data/site-content';
import { modules } from '../data/modules';

const modulePreview = modules.slice(0, 3);
</script>

<template>
  <section class="panel hero-panel">
    <p class="eyebrow">Self-hosted Household OS</p>
    <h1>{{ hero.title }}</h1>
    <p class="lead">{{ hero.subtitle }}</p>

    <div class="chip-row">
      <span v-for="chip in hero.chips" :key="chip" class="chip">{{ chip }}</span>
    </div>

    <div class="action-row">
      <RouterLink class="btn primary" to="/modules">Explore Modules</RouterLink>
      <RouterLink class="btn secondary" to="/docs">Read Documentation</RouterLink>
    </div>
  </section>

  <section class="panel">
    <header class="section-head">
      <h2>What makes Homebook useful</h2>
      <p>Designed for real household workflows, not fragmented app hopping.</p>
    </header>

    <div class="card-grid three">
      <article v-for="point in introPoints" :key="point.title" class="card feature-card">
        <h3>{{ point.title }}</h3>
        <p>{{ point.text }}</p>
      </article>
    </div>
  </section>

  <section class="panel split-panel">
    <div>
      <p class="eyebrow">Quick Preview</p>
      <h2>Core modules you can run today</h2>
      <p>
        Modules are independently maintainable. Add, remove, or extend features without rebuilding the
        whole product structure.
      </p>
      <RouterLink class="text-link" to="/roadmap">See delivery timeline</RouterLink>
    </div>

    <div class="card-grid">
      <article v-for="module in modulePreview" :key="module.id" class="card module-mini">
        <h3>{{ module.name }}</h3>
        <p>{{ module.summary }}</p>
      </article>
    </div>
  </section>
</template>
