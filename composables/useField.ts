import { ref, watch } from "vue";
import type { IFieldInput } from "~/composables/useForm";

interface IField {
  label: string;
  value: any;
  valid: Ref<boolean>;
  errors: string[];
  touch: Ref<boolean>;
  setTouch: (value: boolean) => void;
}

export function useField(field: IFieldInput): IField {
  const valid = ref(true);
  const label = field.label;
  const value = ref(field.value);
  const errors = reactive<string[]>([]);
  const touch = ref(Boolean(field.value));

  const validate = (value: any) => {
    //  Reset validation variables
    valid.value = true;
    errors.splice(0);

    field.rules?.forEach((rule) => {
      const isValid = rule(value);
      if (typeof isValid === "string") {
        errors.push(isValid);
        valid.value = false;
      }
    });
  };

  watch(value, validate, { immediate: true });

  return {
    label,
    value,
    valid,
    errors,
    touch,
    setTouch(value: boolean) {
      touch.value = value;
    },
  };
}

export type { IField };
