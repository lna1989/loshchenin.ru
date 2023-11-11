import { WORK_EXPERIENCE_LIST } from "~/plug/work-experience";

export default defineEventHandler(() => {
  return structuredClone(WORK_EXPERIENCE_LIST);
});
