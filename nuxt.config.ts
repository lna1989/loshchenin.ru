// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://loshchenin.ru",
    name: "Сайт FE разработчика Лощинина Никиты",
    description:
      "На сайте вы можете воспользоваться контактной информацией для связи со мной, ознакомиться с моим опытом работы, технологическим стеком и отправить свое предложение ко мне.",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-icon",
    //   SEO
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-og-image",
    "nuxt-schema-org",
    "nuxt-seo-experiments",
    "nuxt-link-checker",
    "@artmizu/yandex-metrika-nuxt",
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
    twicpics: {
      baseURL: "https://loshchenin.twic.pics/",
    },
    format: ["avif", "webp"],
  },
  runtimeConfig: {
    nodemailerHost: process.env.NUXT_NODEMAILER_HOST,
    nodemailerPort: process.env.NUXT_NODEMAILER_PORT,
    nodemailerSecure: process.env.NUXT_NODEMAILER_SECURE,
    nodemailerUser: process.env.NUXT_NODEMAILER_USER,
    nodemailerPass: process.env.NUXT_NODEMAILER_PASS,
    nodemailerFrom: process.env.NUXT_NODEMAILER_FROM,
    nodemailerTo: process.env.NUXT_NODEMAILER_TO,
    public: {
      API_V: process.env.API_V,
    },
  },
  schemaOrg: {
    identity: {
      type: "Person",
      name: "Nikita",
      familyName: "Loshchenin",
      email: "nikita@loshchenin.ru",
      telephone: "+79170616104",
    },
  },
});
