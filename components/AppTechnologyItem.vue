<template>
  <a
    :href="item.link"
    rel="nofollow"
    :title="item.title"
    class="app-technology-item flex flex-col rounded-xl border bg-neutral-800 dark:border-white"
    target="_blank"
  >
    <div class="h-20 p-4 md:h-28">
      <Icon
        :name="item.icon"
        size="100%"
        class="app-technology-item__icon"
      ></Icon>
    </div>

    <span class="mx-auto p-2 text-center">{{ item.title }}</span>
  </a>
</template>

<script setup lang="ts">
import type { Technology } from "~/plug/technology-list";

interface Props {
  item: Technology;
}

defineProps<Props>();
</script>

<style>
.app-technology-item {
  transition: box-shadow ease-in 300ms;

  .app-technology-item__icon {
    filter: drop-shadow(2px 4px 6px var(--background));
    transition:
      filter ease-in 300ms,
      transform ease-in 150ms;
  }
}

.app-technology-item:hover {
  box-shadow: 0 0 4px 4px var(--background) inset;
  .app-technology-item__icon {
    filter: drop-shadow(4px 8px 12px var(--background));
    transform: scale(1.09);
  }
}
</style>
