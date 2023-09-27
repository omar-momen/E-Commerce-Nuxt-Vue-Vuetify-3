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
      googlemapsapikey: "AIzaSyC2MTR_vRbsbQQRPt5f5ZLCvvaKOpzkzlA",
      locale: "en",
      fallbacklocale: "en",
      apiBase: "https://develobug.com/zal/public/provider/",
    },
  },

  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
});
