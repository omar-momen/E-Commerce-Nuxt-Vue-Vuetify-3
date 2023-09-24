// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  nitro: {
    routeRules: {
      "/img/**": {
        headers: { "cache-control": `public,max-age=${3600},s-maxage=${3600}` },
      },
      "/_nuxt/**": {
        headers: { "cache-control": `public,max-age=${3600},s-maxage=${3600}` },
      },
    },
  },

  modules: ["nuxt-icon", "@pinia/nuxt", "@nuxt/image"],

  image: {
    unsplash: {
      baseURL: "https://images.unsplash.com/",
    },

    cloudinary: {
      baseURL: "https://res.cloudinary.com/<your-cloud-name>/image/upload/",
    },

    presets: {
      default: {
        modifiers: {
          format: "webp",
          fit: "cover",
          quality: "70",
        },
      },
    },
  },

  build: {
    transpile: ["vuetify", "@googlemaps/js-api-loader"],
  },

  css: [
    "~/assets/scss/main.scss",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  app: {
    layoutTransition: { name: "slide-left", mode: "out-in" },
    pageTransition: { name: "fadeIn", mode: "out-in" },
  },

  components: [{ path: "~/components", pathPrefix: false }],

  runtimeConfig: {
    public: {
      LOCALE: "en",
      FALLBACK_LOCALE: "en",
      GOOGLE_MAPS_API_KEY: "AIzaSyC2MTR_vRbsbQQRPt5f5ZLCvvaKOpzkzlA",
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },

  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
});
