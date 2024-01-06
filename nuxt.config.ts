// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-icon",
  ],
  tailwindcss: {
    configPath: "~/configs/tailwind.config.ts",
  },
  i18n: {
    vueI18n: "~/configs/vue-i18n.ts",
    strategy: "prefix_except_default",
    defaultLocale: "ru",
    langDir: "i18n",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en_US.json",
      },
      {
        code: "ru",
        iso: "ru-RU",
        file: "ru_RU.json",
      },
      {
        code: "by",
        iso: "be-BY",
        file: "be_BY.json",
      },
    ],
    lazy: true,
    detectBrowserLanguage: false,
    debug: false,
  },
  googleFonts: {
    families: {
      Roboto: true,
      "Fira+Code": true,
    },
  },
  image: {
    format: ["avif", "webp"],
  },
  runtimeConfig: {
    nodemailerHost: "smtp.yandex.ru",
    nodemailerPort: "465",
    nodemailerSecure: "1",
    nodemailerUser: "nikita@loshchenin.ru",
    nodemailerPass: "******",
    nodemailerFrom: "Nikita Loshchenin 👻 <nikita@loshchenin.ru>",
    nodemailerTo: "nikita@loshchenin.ru",
    public: {
      API_V: process.env.API_V,
    },
  },
});
