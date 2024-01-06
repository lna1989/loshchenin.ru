<template>
  <div
    class="text-field"
    :class="{
      'text-field--has-errors': hasErrors,
    }"
  >
    <label v-if="field.label" class="text-field__label mb-1" :for="inputId">{{
      field.label
    }}</label>
    <input
      :id="inputId"
      :value="modelValue"
      type="text"
      :name="name"
      class="text-field__input h-8 p-2"
      @blur="field.setTouch(true)"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <div v-if="hasErrors" class="text-field__error-list">
      <p
        v-for="(error, index) in field.errors"
        :key="index"
        class="text-field__error my-1 text-xs"
      >
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IField } from "~/composables/useField";

interface Props {
  modelValue: string;
  field: IField;
  name: string;
  inputId?: string;
}

const { modelValue, field, name, inputId } = defineProps<Props>();
const $emit = defineEmits(["update:modelValue"]);

const hasErrors = computed(() => {
  return field.touch && !field.valid;
});
</script>

<style>
.text-field {
  color: var(--text);

  .text-field__input {
    color: var(--background);
    background: var(--text);
  }

  &--has-errors {
    color: var(--error) !important;

    .text-field__input {
      outline: 2px solid var(--error);
      outline-offset: 2px;
    }
  }
}
</style>
