<template>
  <div
    class="dark:highlight-white/5 relative mx-auto flex max-w-sm flex-col content-start items-start gap-6 overflow-visible rounded-xl bg-black text-white shadow-lg ring-1 ring-black/5 dark:bg-white dark:text-black"
  >
    <NuxtImg
      provider="twicpics"
      height="96"
      width="96"
      class="absolute -left-6 -top-2 h-24 w-24 rounded-full border-2 shadow-md"
      src="/images/me/me3.png"
      loading="lazy"
      :alt="t('me.сontact_information.name')"
    />
    <div class="flex flex-col py-2 pl-24 pr-5">
      <strong class="text-lg">{{ t("me.fio.long") }}</strong>
      <span class="text-sm font-medium text-slate-500 dark:text-gray-800">{{
        t("me.position.long")
      }}</span>
      <a
        href="https://yandex.ru/maps/geo/ulyanovsk/53105313/?ll=48.477494%2C54.300854&z=11"
        rel="nofollow"
        class="text-sm decoration-red-900 decoration-2 hover:underline"
      >
        <Icon name="mdi:map-marker-outline" class="mr-2" />
        <span>{{ t("me.сontact_information.place") }}</span
        ><br />
      </a>
    </div>
    <div class="flex flex-col px-5 pb-5">
      <strong class="text-lg">{{ t("me.сontact_information.title") }}</strong>
      <address>
        <ul class="regular">
          <li>
            <a
              class="font-medium decoration-red-900 decoration-2 hover:underline"
              href="https://t.me/Nikita_Loshchenin"
              rel="nofollow"
            >
              <Icon name="mdi:telegram" class="mr-2" />
              {{ t("me.сontact_information.telegram") }}
            </a>
            <span class="text-sm italic">{{
              t("me.сontact_information.preferably")
            }}</span>
          </li>
          <li>
            <a
              class="0 font-medium decoration-red-900 decoration-2 hover:underline"
              :href="`mailto:${t('me.сontact_information.email')}`"
              rel="nofollow"
            >
              <Icon name="mdi:email" class="mr-2" />
              {{ t("me.сontact_information.email") }}</a
            >
          </li>
        </ul>
      </address>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
