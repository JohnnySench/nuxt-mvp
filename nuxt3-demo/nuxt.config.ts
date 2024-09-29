// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper', '@pinia/nuxt', 'nuxt-svgo', 'vue-yandex-maps/nuxt'],
  eslint: {
    /* module options */
  },
  alias: {
    pinia: "pinia/dist/pinia.mjs"
  },
  vue: {
    propsDestructure: true,
  },
  typescript: {
    strict: true,
  },
  yandexMaps: {
    apikey: process.env.NUXT_API_KEY,
  },
  svgo: {
    autoImportPath: './assets',
  },
  components: [
    {
      path: 'shared',
      extensions: ['.vue'],
      prefix: 'Shared',
    },
    {
      path: 'features',
      extensions: ['.vue'],
      prefix: 'Feature',
    },
    {
      path: 'widgets',
      extensions: ['.vue'],
      prefix: 'Widget',
    },
    {
      path: 'entities',
      extensions: ['.vue'],
      prefix: 'Entity',
    },
    {
      path: 'layouts',
      extensions: ['.vue'],
      prefix: 'Layout',
    },
  ],

  compatibilityDate: '2024-09-19',
})