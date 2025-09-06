export default defineNuxtConfig({
  modules: ['@vueuse/motion/nuxt','@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2025-09-03',
})
