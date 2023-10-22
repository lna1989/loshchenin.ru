<template>
  <div>
    <h1>Index page</h1>
    <h2>{{ t('welcome') }}</h2>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})
</script>
