// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  vite: {
    vue: {
      script: {
        globalTypeFiles: [
          fileURLToPath(new URL('./global.d.ts', import.meta.url))
        ]
      }
    }
  }
})
