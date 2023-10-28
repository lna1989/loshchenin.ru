<!--suppress TypeScriptUnresolvedReference -->
<template>
  <div class="app-locale-switcher">
    <span class="app-locale-switcher__prefix">:lang="</span>
    <div
      class="app-locale-switcher__content relative inline-flex cursor-default"
      @mouseenter.passive="isHovered = true"
      @mouseleave.passive="isHovered = false"
    >
      <span>{{ locale }}</span>
      <transition
        enter-from-class="translate-x-[150%] opacity-0"
        leave-to-class="translate-x-[150%] opacity-0"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-300"
      >
        <ul
          v-if="isHovered"
          class="app-locale-switcher__locale-list flex cursor-pointer"
        >
          <li
            v-for="item in supportedLocales"
            v-show="item.code !== locale"
            :key="item.code"
            class="app-locale-switcher__locale-item"
            @click.prevent="changeLocale(item.code)"
          >
            <span v-if="item.code">{{ item.code }}</span>
          </li>
        </ul>
      </transition>
    </div>
    <span class="app-locale-switcher__postfix">"</span>
  </div>
</template>

<script setup lang="ts">
// Used for type casting
import type { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";
const { locale, locales } = useI18n();
// Cast to avoid TypeScript errors in template
const supportedLocales = locales.value as unknown as Array<LocaleObject>;

const router = useRouter();
const switchLocalePath = useSwitchLocalePath();
const isHovered = ref(false);
function changeLocale(locale: string) {
  router.push({ path: switchLocalePath(locale) });
  isHovered.value = false;
}
</script>

<style>
.app-locale-switcher {
  .app-locale-switcher__locale-item {
    &:before {
      content: "||";
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
}
</style>
