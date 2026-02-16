<script setup lang="ts">
import { modules } from '../data/modules';

const sampleWorkflows = [
  {
    title: 'Monthly Finance Cycle',
    text: 'Recurring bookings are imported, budgets are reviewed, and a family summary is published in the wiki.',
    modules: ['Finance', 'Family Wiki']
  },
  {
    title: 'Weekly Food Planning',
    text: 'Meals are selected on Sunday, ingredients are aggregated, and task reminders are assigned.',
    modules: ['Meal Planning', 'Tasks & Routines']
  },
  {
    title: 'Automation Trigger Example',
    text: 'When the meal plan changes, a shared calendar event is updated and notifications are sent.',
    modules: ['Meal Planning', 'Automation Hub', 'Integrations']
  }
];
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

  <section class="panel">
    <header class="section-head">
      <h2>Sample Module Workflows</h2>
      <p>Example combinations showing how modules can be used together in daily operations.</p>
    </header>

    <div class="card-grid three">
      <article v-for="flow in sampleWorkflows" :key="flow.title" class="card">
        <h3>{{ flow.title }}</h3>
        <p>{{ flow.text }}</p>
        <ul class="list-inline">
          <li v-for="moduleName in flow.modules" :key="moduleName">{{ moduleName }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
