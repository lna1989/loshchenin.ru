enum AllowedLocales {
  ru = "ru",
  by = "by",
  en = "en",
}

type I18nString = {
  [key in AllowedLocales]?: string;
};

const ALLOWED_LOCALES = [
  AllowedLocales.ru,
  AllowedLocales.by,
  AllowedLocales.en,
];

function toAllowedLocales(value: string): AllowedLocales {
  switch (value) {
    case "ru":
      return AllowedLocales.ru;
    case "by":
      return AllowedLocales.by;
    case "en":
      return AllowedLocales.en;
    default:
      throw new Error(`Invalid locale: ${value}`);
  }
}

type I18N_CIS_DATE_TIME_FORMATS = {
  month: Intl.DateTimeFormatOptions;
  short: Intl.DateTimeFormatOptions;
  long: Intl.DateTimeFormatOptions;
};

export const I18N_CIS_DATE_TIME_FORMATS: I18N_CIS_DATE_TIME_FORMATS = {
  month: {
    year: "numeric",
    month: "long",
  },
  short: {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  long: {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  },
};

export const I18N_NUMBER_FORMATS = {
  en: {
    currency: {
      style: "currency",
      currency: "USD",
      notation: "standard",
    },
    decimal: {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
  ru: {
    currency: {
      style: "currency",
      currency: "RUB",
      notation: "standard",
    },
    decimal: {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
  be: {
    currency: {
      style: "currency",
      currency: "BYN",
      notation: "standard",
    },
    decimal: {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
} as const;

export type { I18nString };

export { ALLOWED_LOCALES, toAllowedLocales };
