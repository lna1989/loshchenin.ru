import type { I18nString } from "~/const/i18n";
import { ALLOWED_LOCALES, toAllowedLocales } from "~/const/i18n";

export function useI18nString() {
  return {
    getI18nString(i18nString: I18nString): string {
      const { locale } = useI18n();
      const currentLocaleCode = toAllowedLocales(locale.value);

      if (ALLOWED_LOCALES.includes(currentLocaleCode)) {
        return i18nString[currentLocaleCode] ?? "";
      }
      return "";
    },
  };
}
