// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  app: {
    head: {
      title: 's.ACMT',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  vite: {
    vue: {
      script: {
        globalTypeFiles: [
          fileURLToPath(new URL('./global.d.ts', import.meta.url)),
        ],
      },
    },
  },
})
