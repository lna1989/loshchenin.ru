<template>
  <section class="app-work-experience-list">
    <slot name="header"></slot>
    <div class="app-work-experience-list__content flex flex-col gap-4">
      <AppWorkExperienceItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        class="app-work-experience-list__item border-dividerColor border-b pb-4 last:border-b-0"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { WorkExperience } from "~/const/work-experience";

interface Props {
  list: WorkExperience[];
}

defineProps<Props>();
</script>
