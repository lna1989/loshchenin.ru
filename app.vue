<template>
  <NuxtLayout
    :class="{
      'theme-light': !darkMode,
      'theme-dark': darkMode,
    }"
    class="bg-themeBackground text-themeText min-h-screen"
  >
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const darkMode = useState("theme", () => true);
</script>
