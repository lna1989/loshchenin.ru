import { reactive } from "vue";
import type { IField } from "~/composables/useField";
import { useField } from "~/composables/useField";

interface IForm {
  [key: string]: IField;
}

interface IFieldInput {
  label: string;
  value: any;
  rules?: ((value: any) => true | string)[];
}

export function useForm(fields = {}) {
  const form: IForm = reactive({});

  for (const [key, value] of Object.entries(fields)) {
    form[key] = useField(value as IField);
  }

  const valid = computed(() => {
    let result = true;
    for (const [, value] of Object.entries(form)) {
      if (!value.valid) {
        result = false;
        break;
      }
    }
    return result;
  });

  return {
    form,
    valid,
    validate() {
      for (const [, value] of Object.entries(form)) {
        typeof value.setTouch === "function" && value.setTouch(true);
      }
      return valid.value;
    },
    reset() {
      for (const [, value] of Object.entries(form)) {
        typeof value.setTouch === "function" && value.setTouch(false);
        value.value = "";
      }
    },
  };
}

export type { IForm, IFieldInput };
