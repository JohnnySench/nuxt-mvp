// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "node:url";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper', '@pinia/nuxt', 'nuxt-svgo', 'vue-yandex-maps/nuxt'],
  eslint: {
    /* module options */
  },
  alias: {
    pinia: "pinia/dist/pinia.mjs",
    'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
    'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
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
    autoImportPath: './assets/svg',
    defaultImport: 'skipsvgo',
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeDoctype: false,
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@import "./assets/style/variables.scss";`,
        },
      },
    },
  },
  css: [
    "./assets/style/main.scss", // you should add main.scss somewhere in your app
  ],
  components: [
    {
      path: 'shared',
      extensions: ['.vue'],
      prefix: 'shared',
    },
    {
      path: 'features',
      extensions: ['.vue'],
      prefix: 'feature',
    },
    {
      path: 'widgets',
      extensions: ['.vue'],
      prefix: 'widget',
    },
    {
      path: 'components',
      extensions: ['.vue'],
      prefix: 'components',
    },
    {
      path: 'entities',
      extensions: ['.vue'],
      prefix: 'entity',
    },
    {
      path: 'layouts',
      extensions: ['.vue'],
      prefix: 'layout',
    },
  ],

  compatibilityDate: '2024-09-19',
})