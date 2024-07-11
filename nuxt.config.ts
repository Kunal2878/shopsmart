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

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
         href:"https://fonts.googleapis.com/css2?family=Jaini&display=swap" 
        }
      ]
    }
  }

})
