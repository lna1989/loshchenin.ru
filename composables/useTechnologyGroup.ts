import type { Technology } from "~/plug/technology-list";
import type { TechnologyType } from "~/const/technology";
import { TECHNOLOGY_SORTED_TYPES } from "~/const/technology";

type TechnologyGroup = {
  title: string;
  type: TechnologyType;
  list: Technology[];
};

type TechnologyGroups = {
  [K in TechnologyType]?: TechnologyGroup;
};

export async function useTechnologyGroup() {
  const technologyList = await $fetch<Technology[]>(
    "/api/v0/technologies-list",
  );
  const technologyGroupList: TechnologyGroups = {};

  technologyList.forEach((item) => {
    item?.types?.forEach((type) => {
      if (!technologyGroupList[type]) {
        technologyGroupList[type] = {
          title: `technology.group.${type.toLowerCase()}.title`,
          type,
          list: [item],
        };
      } else {
        technologyGroupList[type]?.list.push(item);
      }
    });
  });

  return {
    technologyList,
    technologyGroupList,
    getSortedTechnologyGroup() {
      return TECHNOLOGY_SORTED_TYPES.map((type): TechnologyGroup | never[] => {
        return technologyGroupList?.[type] || { title: "", type, list: [] };
      });
    },
  };
}

export type { Technology, TechnologyGroup };
