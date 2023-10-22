// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],
    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: 'ru',
        langDir: 'i18n',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en.json'
            },
            {
                code: 'ru',
                iso: 'ru-RU',
                file: 'ru.json'
            }
        ],
        lazy: true,
    }
})
