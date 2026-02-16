import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ModulesPage from './pages/ModulesPage.vue';
import RoadmapPage from './pages/RoadmapPage.vue';
import DocsPage from './pages/DocsPage.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/modules', name: 'modules', component: ModulesPage },
    { path: '/roadmap', name: 'roadmap', component: RoadmapPage },
    { path: '/docs', name: 'docs', component: DocsPage }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
