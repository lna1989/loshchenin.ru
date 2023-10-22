<template>
  <div>
    <h1>I18N page</h1>
    <div>
      <div>
        <h2>
          Message
        </h2>
        <ul>
          <li>{{ t('i18n.block.message.t') }}</li>
          <li>{{ t('i18n.block.message.tc', {count: 0}, 0) }}</li>
          <li>{{ t('i18n.block.message.tc', {count: 1}, 1) }}</li>
          <li>{{ t('i18n.block.message.tc', {count: 2}, 2) }}</li>
          <li>{{ t('i18n.block.message.tc', {count: 7}, 7) }}</li>
        </ul>
      </div>
      <div>
        <h2>Date</h2>
        <ul>
          <li>{{ d(new Date(), 'short') }}</li>
          <li>{{ d(new Date(), 'long') }}</li>
        </ul>
      </div>
      <div>
        <h2>Числа:</h2>
        <ul>
          <li>{{ n(1001) }}</li>
          <li>{{ n(1001, 'currency') }}</li>
          <li>{{ n(1001, 'percent') }}</li>
          <li>{{ n(1001, 'decimal') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const {t, d, n} = useI18n()
</script>
