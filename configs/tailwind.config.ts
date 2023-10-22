import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Roboto','sans-serif'],
      mono: ['"Fira code"','monospace']
    },
    extend: {
      colors: {
        themeBackground: 'var(--background)',
        themeText: 'var(--text)',
        dividerColor: 'var(--divider)'
      },
    },
  },
  plugins: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ]
}
