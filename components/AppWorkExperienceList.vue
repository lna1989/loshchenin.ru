<template>
  <section class="app-work-experience-list">
    <slot name="title"></slot>
    <div class="app-work-experience-list__content">
      <AppWorkExperienceItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        class="app-work-experience-list__item"
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
