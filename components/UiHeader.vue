<template>
  <header
    class="bg-background/75 border-dividerColor sticky top-0 z-50 -mb-px border-b border-gray-200 backdrop-blur"
  >
    <div
      class="container mx-auto flex items-center justify-center gap-2 px-8 md:justify-start"
    >
      <slot name="logo" />
      <slot />
    </div>
  </header>
</template>
