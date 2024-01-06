<template>
  <div v-if="status">
    <p class="w-full text-center">{{ statusMessage }}</p>
  </div>
  <form v-else class="app-form app-form--offer" @submit.prevent="onSubmit">
    <legend class="app-form__legend text-xl">
      {{ t("offer_form.label") }}:
    </legend>
    <UiTextField
      v-model="form.companyName.value"
      :field="form.companyName"
      :touch="touch"
      name="companyName"
      input-id="companyName"
    />
    <UiTextField
      v-model="form.contactDetails.value"
      :field="form.contactDetails"
      :touch="touch"
      name="contactDetails"
      input-id="contactDetails"
    />
    <UiTextField
      v-model="form.salary.value"
      :field="form.salary"
      :touch="touch"
      name="salary"
      input-id="salary"
    />
    <UiTextField
      v-model="form.possiblySalaryAfterYears.value"
      :field="form.possiblySalaryAfterYears"
      :touch="touch"
      name="possiblySalaryAfterYears"
      input-id="possiblySalaryAfterYears"
    />
    <div class="app-form__actions">
      <button type="submit">{{ t("form.action.submit.text") }}</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "~/composables/useForm";
import { useServerApi } from "~/composables/useServerApi";

const statusSuccess = "success";
const statusFail = "fail";

const { t } = useI18n();
const { getApiUrlPath } = useServerApi();
const status = ref("");
const $emit = defineEmits("submit");
const required = (value: string) => {
  return !!value || t("form.validation.required");
};
const touch: Ref<boolean> = ref(false);

const { form, validate, reset } = useForm({
  companyName: {
    label: t("offer_form.company_name.label"),
    value: "",
    rules: [required],
  },
  contactDetails: {
    label: t("offer_form.contact_details.label"),
    value: "",
    rules: [required],
  },
  salary: {
    label: t("offer_form.salary.label"),
    value: "",
    rules: [required],
  },
  possiblySalaryAfterYears: {
    label: t("offer_form.possibly_salary_after_years.label"),
    value: "",
    rules: [required],
  },
});

const generateOfferFormDataHtml: () => string = () => {
  let html = "<table><tbody>";

  for (const [, value] of Object.entries(form)) {
    html += `<tr><td>${value.label}:</td><td>${value?.value ?? ""}</td></tr>`;
  }

  html += "</tbody></table>";

  return html;
};

const setStatus = (value: boolean) => {
  status.value = value ? statusSuccess : statusFail;
};

const statusMessage = computed(() => {
  if (!status.value) {
    return "";
  }
  return t(`offer_form.status.${status.value}`);
});

const onSubmit = async () => {
  touch.value = true;

  if (validate()) {
    try {
      await $fetch(getApiUrlPath("send-mail"), {
        method: "post",
        body: {
          subject: t("offer_form.label"),
          html: generateOfferFormDataHtml(),
        },
      });
      reset();
      setStatus(true);
    } catch (error) {
      setStatus();
    }
    $emit("submit");
  }
};
</script>

<style>
.app-form.app-form--offer {
  .text-field__label {
    display: block;
  }

  .text-field,
  .text-field__input {
    width: 100%;
  }
}
</style>
