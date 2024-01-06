<template>
  <div>
    <div class="container mx-auto">
      <div class="-mt-20 flex flex-col pt-20 lg:grid lg:grid-cols-12 lg:gap-8">
        <aside class="lg:col-span-4">
          <div class="relative overflow-auto rounded-xl p-8">
            <AppMeCart />
          </div>
          <div class="relative overflow-auto rounded-xl p-8">
            <AppWorkExperienceList
              :list="workExperienceList"
              class="dark:highlight-white/5 relative mx-auto flex max-w-sm flex-col content-start items-start gap-6 overflow-visible rounded-xl bg-black p-4 text-white shadow-lg ring-1 ring-black/5 dark:bg-white dark:text-black"
            >
              <template #header>
                <h2 class="text-2xl font-black">
                  {{ t("work_experience.title") }}:
                </h2>
              </template>
            </AppWorkExperienceList>
          </div>
          <div
            v-if="canShowOfferForm"
            class="relative overflow-auto rounded-xl p-8"
          >
            <AppOfferForm
              class="dark:highlight-white/5 bg-themeBackground border-themeText relative mx-auto flex max-w-sm flex-col content-start items-start gap-2 overflow-visible rounded-xl border-2 p-4 text-white shadow-lg ring-1 ring-black/5"
              @submit="onOfferFormSubmit"
            />
          </div>
        </aside>
        <main class="p-8 lg:col-span-8">
          <AppTechnologyList
            v-for="technologyGroup in technologyGroupList"
            :key="technologyGroup.type"
            :list="technologyGroup.list"
            class="mb-10"
          >
            <template #header>
              <h2 class="text-4xl">{{ t(technologyGroup.title) }}:</h2>
            </template>
          </AppTechnologyList>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTechnologyGroup } from "~/composables/useTechnologyGroup";
import { useWorkExperience } from "~/composables/useWorkExperience";
import AppOfferForm from "~/components/AppOfferForm.vue";

definePageMeta({
  layout: "default",
});

const { t } = useI18n();
const { getSortedTechnologyGroup } = await useTechnologyGroup();
const { workExperienceList } = await useWorkExperience();
const technologyGroupList = getSortedTechnologyGroup();
const canShowOfferForm = ref(true);

const onOfferFormSubmit = () => {
  setTimeout(() => {
    canShowOfferForm.value = false;
  }, 5000);
};

useHead({
  title: t(""),
});
</script>
