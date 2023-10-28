<template>
  <div class="app-technology-list">
    <slot name="header"></slot>
    <div
      class="app-technology-list__content grid grid-cols-12 gap-4 pt-5 md:gap-8"
    >
      <AppTechnologyItem
        v-for="item in list"
        :key="item.id"
        :item="item"
        class="app-technology-list__item col-span-6 md:col-span-4 lg:col-span-2"
      />
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import type { Technology } from "~/plug/technology-list";

interface Props {
  list: Technology[];
}

defineProps<Props>();
</script>
