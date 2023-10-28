import { TECHNOLOGY_LIST } from "~/plug/technology-list";

export default defineEventHandler(() => {
  return structuredClone(TECHNOLOGY_LIST);
});
