import type { WorkExperience } from "~/const/work-experience";

export async function useWorkExperience() {
  const workExperienceList = await $fetch<WorkExperience[]>(
    "/api/v0/work-experience",
  );

  return { workExperienceList };
}
