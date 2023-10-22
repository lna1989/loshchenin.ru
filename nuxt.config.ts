// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],
    i18n: {
        vueI18n: '~/configs/vue-i18n.ts',
        strategy: 'prefix_except_default',
        defaultLocale: 'ru',
        langDir: 'i18n',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en_US.json'
            },
            {
                code: 'ru',
                iso: 'ru-RU',
                file: 'ru_RU.json'
            },
            {
                code: 'by',
                iso: 'be-BY',
                file: 'be_BY.json'
            }
        ],
        lazy: true,
        detectBrowserLanguage: false,
        debug: false,
    }
})
