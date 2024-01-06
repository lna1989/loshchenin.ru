<template>
  <div class="app-work-experience-item">
    <h3 class="text-xl font-black">
      {{ companyName }}
    </h3>
    <p v-if="position">{{ position }}</p>
    <p class="text-sm italic">
      <span v-if="item.startDate" class="app-work-experience-item__date">{{
        d(new Date(item.startDate), "month")
      }}</span>
      <span class="app-work-experience-item__date-divider px-2">—</span>
      <span v-if="item.endDate" class="app-work-experience-item__date">{{
        d(new Date(item.endDate), "month")
      }}</span>
      <span v-else>{{ t("work_experience.date.until_now") }}</span>
    </p>
    <p v-if="description" class="pt-4 text-sm">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { WorkExperience } from "~/const/work-experience";

interface Props {
  item: WorkExperience;
}

const { item } = defineProps<Props>();
const { t, d } = useI18n();

const { getI18nString } = useI18nString();
const companyName = getI18nString(item.companyName);
const position = getI18nString(item.position);
const description = item.description ? getI18nString(item.description) : "";
</script>
