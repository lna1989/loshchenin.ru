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

interface TechnologyDescription {
  ru: string;
  by: string;
  en: string;
}

interface Technology {
  title: string;
  icon: string | null;
  image: string | null;
  link: string;
  description: TechnologyDescription | null;
  types: TechnologyTypeValues[];
}

export type {
  TechnologyType,
  TechnologyTypeValues,
  TechnologyDescription,
  Technology,
};
export { TECHNOLOGY_TYPES, TECHNOLOGY_SORTED_TYPES };
