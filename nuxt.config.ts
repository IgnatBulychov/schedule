// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require("path");

export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: true,

  nitro: {
    output: {
      publicDir: path.join(__dirname, "dist"),
    },
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  css: ["~/assets/css/tailwind_preflight.css", "~/assets/scss/main.scss"],

  imports: {
    dirs: ["stores"],
  },

  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "nuxt-svgo",
    "dayjs-nuxt",
  ],

  dayjs: {
    locales: ["en"],
    defaultLocale: "en",
    plugins: ["isoWeek"],
  },

  svgo: {
    autoImportPath: "./assets/svg/",
    componentPrefix: "icon",
  },
});
