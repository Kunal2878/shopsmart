import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // devtools: { enabled: true },
  compatibilityDate: "2024-07-02",
  css: ['~/assets/css/main.css'],
  // plugins: ['~/server/plugins/connectdb.js'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  // pinia: {
  //   // Optional Pinia configuration options
  //   storesDirs: ['./stores/**'] // Specify stores directories
  // },
})
