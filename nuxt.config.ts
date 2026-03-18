// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxt/ui', '@vueuse/motion/nuxt'],

  css: ['~/assets/css/main.css'],

  components: {
    dirs: [
      { path: '~/components', pathPrefix: false },
    ],
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  app: {
    // GitHub Pages の場合: NUXT_APP_BASE_URL=/Portfolio/ npm run generate
    baseURL: process.env.NUXT_APP_BASE_URL ?? '/',
    head: {
      title: 'Hiromu Odahara - Portfolio',
      htmlAttrs: { lang: 'ja', class: 'dark' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Hiromu Odahara のポートフォリオサイト。Web エンジニアとしての経歴・スキル・制作物をご紹介します。',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap',
        },
      ],
    },
  },

  nitro: {
    preset: 'static',
  },

  ui: {
    colorMode: false,
  },
})
