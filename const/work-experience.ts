import type { I18nString } from "~/const/i18n";

interface WorkExperience {
  companyName: I18nString;
  position: I18nString;
  description: I18nString | null;
  startDate?: Date;
  endDate?: Date;
}

export type { WorkExperience };
