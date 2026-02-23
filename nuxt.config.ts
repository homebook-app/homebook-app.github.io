import { docsEntries } from './app/data/docs'
import { featureModules } from './app/data/features'

const docsRoutes = docsEntries.map(entry => `/docs/${entry.slug}`)
const featureRoutes = ['/features', ...featureModules.map(module => `/features/${module.slug}`)]

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: true
  },

  app: {
    baseURL: '/'
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/roadmap': { prerender: true },
    '/releases': { prerender: true },
    '/docs': { prerender: true },
    '/features': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    preset: 'static',
    prerender: {
      routes: [
        '/',
        '/roadmap',
        '/releases',
        '/docs',
        ...featureRoutes,
        ...docsRoutes
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
