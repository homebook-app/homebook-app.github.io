import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ModulesPage from './pages/ModulesPage.vue';
import RoadmapPage from './pages/RoadmapPage.vue';
import DocsLayoutPage from './pages/docs/DocsLayoutPage.vue';
import DocsEntryPage from './pages/docs/DocsEntryPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/modules', name: 'modules', component: ModulesPage },
    { path: '/roadmap', name: 'roadmap', component: RoadmapPage },
    {
      path: '/docs',
      component: DocsLayoutPage,
      children: [
        { path: '', redirect: '/docs/getting-started' },
        { path: ':slug', name: 'docs-entry', component: DocsEntryPage }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
