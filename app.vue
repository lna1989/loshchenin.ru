<template>
  <NuxtLayout :class="{
      'theme-light': !darkMode,
      'theme-dark': darkMode,
    }" class="h-screen bg-themeBackground text-themeText">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
type Theme = 'light' | 'dark'
const LOCAL_STORAGE_THEME_KEY = 'theme'
const darkMode = useState('theme', () => true)
</script>
