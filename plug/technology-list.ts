import type { Technology, TechnologyInput } from "~/const/technology";
import { TECHNOLOGY_TYPES } from "~/const/technology";

function createTechnology(data: TechnologyInput): Technology {
  return Object.assign(
    {
      title: "",
      icon: null,
      image: null,
      link: "",
      description: null,
      types: [],
    },
    data,
  );
}

const TECHNOLOGY_LIST: Technology[] = [
  createTechnology({
    title: "JavaScript",
    icon: "logos:javascript",
    link: "https://262.ecma-international.org/",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Knockout.js",
    icon: "logos:knockout",
    link: "https://knockoutjs.com/",
    types: [TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Vue.js",
    icon: "logos:vue",
    link: "https://vuejs.org/",
    types: [TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Nuxt.js",
    icon: "logos:nuxt-icon",
    link: "https://nuxt.com/",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Node.js",
    link: "https://nodejs.org/ru",
    icon: "logos:nodejs-icon",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Pinia/VUEX",
    link: "https://pinia.vuejs.org/",
    icon: "logos:pinia",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Bun.js",
    link: "https://bun.sh/",
    icon: "logos:bun",
    types: [TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Vite.js",
    link: "https://vitejs.dev/",
    icon: "logos:vitejs",
    types: [TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Webpack",
    link: "https://webpack.js.org/",
    icon: "logos:webpack",
    types: [TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Gulp.js",
    link: "https://gulpjs.com/",
    icon: "logos:gulp",
    types: [TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Grunt.js",
    link: "https://gruntjs.com/",
    icon: "logos:grunt",
    types: [TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "ESLint",
    link: "https://eslint.org/",
    icon: "logos:eslint",
    types: [TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "Prettier",
    link: "https://prettier.io/",
    icon: "logos:prettier",
    types: [TECHNOLOGY_TYPES.JS],
  }),
  createTechnology({
    title: "CSS3",
    icon: "logos:css-3",
    link: "https://developer.mozilla.org/ru/docs/Web/CSS/Reference",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.UI],
  }),
  createTechnology({
    title: "SASS",
    icon: "logos:sass",
    link: "https://sass-lang.com/",
    types: [TECHNOLOGY_TYPES.UI],
  }),
  createTechnology({
    title: "Vuetify.js",
    icon: "logos:vuetifyjs",
    link: "https://v2.vuetifyjs.com/",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.UI],
  }),
  createTechnology({
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "logos:tailwindcss-icon",
    types: [TECHNOLOGY_TYPES.UI],
  }),
  createTechnology({
    title: "POSTCSS",
    link: "https://postcss.org/",
    icon: "logos:postcss",
    types: [TECHNOLOGY_TYPES.UI],
  }),
  createTechnology({
    title: "bem",
    link: "https://ru.bem.info/",
    icon: "logos:bem",
    types: [TECHNOLOGY_TYPES.UI],
  }),
  createTechnology({
    title: "stylelint",
    link: "https://stylelint.io/",
    icon: "logos:stylelint",
    types: [TECHNOLOGY_TYPES.UI],
  }),
  createTechnology({
    title: "HTML5",
    link: "https://html.spec.whatwg.org/multipage/",
    icon: "logos:html-5",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.WEB],
  }),
  createTechnology({
    title: "Laravel",
    link: "https://laravel.com/docs/10.x/blade",
    icon: "logos:laravel",
    types: [TECHNOLOGY_TYPES.WEB],
  }),
  createTechnology({
    title: "Magento 2",
    link: "https://business.adobe.com/ru/products/magento/magento-commerce.html",
    icon: "logos:magento",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.WEB],
  }),
  createTechnology({
    title: "NGINX",
    link: "https://nginx.org/",
    icon: "logos:nginx",
    types: [TECHNOLOGY_TYPES.WEB],
  }),
  createTechnology({
    title: "Markdown",
    link: "https://www.markdownguide.org/basic-syntax/",
    icon: "logos:markdown",
    types: [TECHNOLOGY_TYPES.WEB],
  }),
  createTechnology({
    title: "Firebase",
    link: "https://firebase.google.com/",
    icon: "logos:firebase",
    types: [TECHNOLOGY_TYPES.DATABASE],
  }),
  createTechnology({
    title: "MongoDB",
    link: "https://www.mongodb.com",
    icon: "logos:mongodb-icon",
    types: [TECHNOLOGY_TYPES.DATABASE],
  }),
  createTechnology({
    title: "MySQL",
    link: "https://www.mysql.com/",
    icon: "logos:mysql",
    types: [TECHNOLOGY_TYPES.DATABASE],
  }),
  createTechnology({
    title: "Redis",
    link: "https://redis.io/",
    icon: "logos:redis",
    types: [TECHNOLOGY_TYPES.DATABASE],
  }),
  createTechnology({
    title: "SQlite",
    link: "https://www.sqlite.org/index.html",
    icon: "logos:sqlite",
    types: [TECHNOLOGY_TYPES.DATABASE],
  }),
  createTechnology({
    title: "PWA",
    link: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps",
    icon: "logos:pwa",
    types: [TECHNOLOGY_TYPES.WEB],
  }),
  createTechnology({
    title: "Postman",
    link: "https://www.postman.com/",
    icon: "logos:postman-icon",
    types: [TECHNOLOGY_TYPES.API],
  }),
  createTechnology({
    title: "GraphQL",
    link: "https://github.com/nuxt-modules/apollo/tree/v4",
    icon: "logos:graphql",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.API],
  }),
  createTechnology({
    title: "Altair",
    link: "https://altairgraphql.dev/",
    icon: "logos:altair",
    types: [TECHNOLOGY_TYPES.API],
  }),
  createTechnology({
    title: "{JSON:API}",
    link: "https://jsonapi.org/",
    icon: "mdi:code-json",
    types: [TECHNOLOGY_TYPES.API],
  }),
  createTechnology({
    title: "Axios",
    link: "https://axios-http.com",
    icon: "logos:axios",
    types: [TECHNOLOGY_TYPES.API],
  }),
  createTechnology({
    title: "Websocket",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
    icon: "logos:websocket",
    types: [TECHNOLOGY_TYPES.API],
  }),
  createTechnology({
    title: "UNIX",
    link: "https://ubuntu.com/",
    icon: "logos:ubuntu",
    types: [TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "Figma",
    link: "https://www.figma.com/",
    icon: "logos:figma",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "Docker",
    link: "https://www.docker.com/",
    icon: "logos:docker-icon",
    types: [TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "JetBrains IDE's",
    link: "https://www.jetbrains.com/",
    icon: "logos:jetbrains",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "wsl 2",
    link: "https://learn.microsoft.com/ru-ru/windows/wsl/about",
    icon: "logos:microsoft-windows-icon",
    types: [TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "Browserstack",
    link: "https://www.browserstack.com/",
    icon: "logos:browserstack",
    types: [TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "pm2",
    link: "https://pm2.io/",
    icon: "logos:pm2-icon",
    types: [TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "git",
    link: "https://git-scm.com/",
    icon: "logos:git-icon",
    types: [TECHNOLOGY_TYPES.CORE, TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "JSON-LD",
    link: "https://json-ld.org/",
    icon: "logos:json-ld",
    types: [TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "Vagrant",
    link: "https://www.vagrantup.com/",
    icon: "logos:vagrant-icon",
    types: [TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "Targetprocess",
    link: "https://www.targetprocess.com/",
    icon: "logos:targetprocess",
    types: [TECHNOLOGY_TYPES.APPLIED],
  }),
  createTechnology({
    title: "Confluence",
    link: "https://www.atlassian.com/ru/software/confluence",
    icon: "logos:confluence",
    types: [TECHNOLOGY_TYPES.APPLIED],
  }),
];

export type { Technology };
export { TECHNOLOGY_LIST };
