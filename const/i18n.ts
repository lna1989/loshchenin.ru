type I18nString = {
  ru: string;
  by: string;
  en: string;
};

type I18N_CIS_DATE_TIME_FORMATS = {
  short: Intl.DateTimeFormatOptions;
  long: Intl.DateTimeFormatOptions;
};

export const I18N_CIS_DATE_TIME_FORMATS: I18N_CIS_DATE_TIME_FORMATS = {
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
