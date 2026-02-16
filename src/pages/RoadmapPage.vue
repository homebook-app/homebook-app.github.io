<script setup lang="ts">
import { roadmapItems } from '../data/roadmap';
import type { RoadmapStatus } from '../data/types';

function statusLabel(status: RoadmapStatus): string {
  if (status === 'done') return 'Live';
  if (status === 'progress') return 'In Progress';
  return 'Planned';
}
</script>

<template>
  <section class="panel">
    <header class="section-head">
      <p class="eyebrow">Roadmap</p>
      <h1>Planned delivery over time</h1>
      <p>
        Timeline content is maintained in <code>src/data/roadmap.ts</code>. Keep updates focused by editing a
        single typed array.
      </p>
    </header>

    <div class="timeline">
      <article v-for="item in roadmapItems" :key="item.id" class="timeline-item">
        <div class="timeline-meta">
          <span class="item-date">{{ item.date }}</span>
          <span class="status-pill" :class="item.status">{{ statusLabel(item.status) }}</span>
        </div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.summary }}</p>
      </article>
    </div>
  </section>
</template>
