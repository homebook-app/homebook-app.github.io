<script setup lang="ts">
import { roadmapItems } from '../data/roadmap';
import type { RoadmapStatus } from '../data/types';

function statusLabel(status: RoadmapStatus): string {
  if (status === 'done') return 'Live';
  if (status === 'progress') return 'In Progress';
  return 'Planned';
}

const releaseNotes = [
  {
    version: 'v0.8 Preview',
    focus: 'Finance stability and onboarding',
    highlight: 'Added household templates and first-time setup wizard.'
  },
  {
    version: 'v0.9 Beta',
    focus: 'Meal planning + docs upgrades',
    highlight: 'OpenAPI docs integrated and markdown structure expanded.'
  },
  {
    version: 'v1.0 Target',
    focus: 'Production readiness',
    highlight: 'Backup workflows, role hardening, and module lifecycle checks.'
  }
];
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

  <section class="panel">
    <header class="section-head">
      <h2>Sample Release Track</h2>
      <p>Illustrative milestones to communicate release progress to users and contributors.</p>
    </header>

    <div class="card-grid three">
      <article v-for="note in releaseNotes" :key="note.version" class="card">
        <h3>{{ note.version }}</h3>
        <p><strong>Focus:</strong> {{ note.focus }}</p>
        <p>{{ note.highlight }}</p>
      </article>
    </div>
  </section>
</template>
