<template>
  <div class="app-logo font-mono text-3xl">
    <span class="app-logo__fragment">{{ "<" }}</span>
    <span class="app-logo__fragment app-logo__fragment--pulse font-light">{{
      "|"
    }}</span>
    <nuxt-link-locale
      to="/"
      class="app-logo__fragment mr-4 inline-flex text-red-700"
      >{{ "lna" }}</nuxt-link-locale
    >
    <AppLocaleSwitcher class="mr-1 hidden md:inline-flex" />
    <span class="app-logo__fragment">{{ "/>" }}</span>
  </div>
</template>

<style lang="postcss" scoped>
.app-logo {
  text-shadow: 1px 1px 1px var(--background);

  .app-logo__fragment--pulse {
    animation: pulse 3000ms infinite;
  }

  @keyframes pulse {
    from {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
