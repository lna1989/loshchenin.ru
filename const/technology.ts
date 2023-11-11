import type { I18nString } from "~/const/i18n";

enum TechnologyType {
  CORE = "CORE",
  JS = "JS",
  DATABASE = "DATABASE",
  WEB = "WEB",
  UI = "UI",
  API = "API",
  APPLIED = "APPLIED",
}

type TechnologyTypeValues =
  (typeof TechnologyType)[keyof typeof TechnologyType];

const TECHNOLOGY_TYPES = TechnologyType;

const TECHNOLOGY_SORTED_TYPES = [
  TechnologyType.CORE,
  TechnologyType.JS,
  TechnologyType.DATABASE,
  TechnologyType.UI,
  TechnologyType.WEB,
  TechnologyType.API,
  TechnologyType.APPLIED,
];

interface Technology {
  title: string;
  icon: string | null;
  image: string | null;
  link: string;
  description: I18nString | null;
  types: TechnologyTypeValues[];
}

interface TechnologyInput {
  title: string;
  icon?: string | null;
  image?: string | null;
  link?: string;
  description?: I18nString | null;
  types?: TechnologyTypeValues[];
}

export type {
  TechnologyType,
  TechnologyTypeValues,
  Description,
  Technology,
  TechnologyInput,
};
export { TECHNOLOGY_TYPES, TECHNOLOGY_SORTED_TYPES };
