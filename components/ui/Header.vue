<template>
  <header class="bg-background/75 backdrop-blur border-b border-gray-200 border-dividerColor -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0">
    <div class="mx-auto container flex gap-2 items-center px-5">
      <slot name="logo"/>
      <slot/>
    </div>
  </header>
</template>
