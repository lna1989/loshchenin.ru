<template>
  <Html :lang="htmlAttributes.lang" :dir="htmlAttributes.dir">
    <Body>
      <div class="layout layout--default">
        <UiHeader class="py-4">
          <template #logo>
            <AppLogo />
          </template>
        </UiHeader>
        <slot />
      </div>
    </Body>
  </Html>
</template>

<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});

const htmlAttributes = computed(() => {
  return head.value.htmlAttrs!;
});
</script>
