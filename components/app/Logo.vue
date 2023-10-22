<template>
  <nuxt-link :to="localePath('/')" class="app-logo font-mono text-3xl">
    <span class="app-logo__fragment">{{ '<' }}</span>
    <span class="app-logo__fragment app-logo__fragment--pulse font-light">{{ '|' }}</span>
    <span class="app-logo__fragment text-red-700">{{ 'lna' }}</span>
    <span class="app-logo__fragment">{{ '/>' }}</span>
  </nuxt-link>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style lang="postcss" scoped>
.app-logo {
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
