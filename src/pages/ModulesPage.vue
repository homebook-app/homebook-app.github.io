<script setup lang="ts">
import { modules } from '../data/modules';
</script>

<template>
  <section class="panel">
    <header class="section-head">
      <p class="eyebrow">Platform Modules</p>
      <h1>Composable tools for private households</h1>
      <p>
        This section is list-driven via <code>src/data/modules.ts</code>. Update module data without changing
        templates.
      </p>
    </header>

    <div class="card-grid three">
      <article v-for="module in modules" :key="module.id" class="card module-card">
        <div class="module-head">
          <h2>{{ module.name }}</h2>
          <span class="status-pill" :class="module.status">{{ module.status }}</span>
        </div>
        <p>{{ module.summary }}</p>
        <ul class="list-inline">
          <li v-for="tag in module.tags" :key="tag">{{ tag }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
