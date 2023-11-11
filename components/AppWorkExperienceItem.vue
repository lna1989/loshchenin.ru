<template>
  <div class="app-work-experience-item">
    {{ item.companyName }}
  </div>
</template>

<script setup lang="ts">
import type { WorkExperience } from "~/const/work-experience";

interface Props {
  item: WorkExperience;
}

defineProps<Props>();
</script>
