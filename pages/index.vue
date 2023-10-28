<template>
  <div>
    <div class="container mx-auto">
      <div class="-mt-20 flex flex-col pt-20 lg:grid lg:grid-cols-12 lg:gap-8">
        <aside class="lg:col-span-4">
          <AppMeCart />
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

definePageMeta({
  layout: "default",
});

const { t } = useI18n();
const { getSortedTechnologyGroup } = await useTechnologyGroup();
const technologyGroupList = getSortedTechnologyGroup();
</script>
