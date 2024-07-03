// https://nuxt.com/docs/api/configuration/nuxt-config
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

})