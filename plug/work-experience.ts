import type { WorkExperience } from "~/const/work-experience";

const WORK_EXPERIENCE_LIST: WorkExperience[] = [
  {
    companyName: {
      ru: 'Веб студия "Симметрия"',
      by: 'Веб студия "Симметрия"',
      en: 'Web Studio "Symmetry"',
    },
    position: {
      ru: "Web-разработчик",
      by: "Web-разработчик",
      en: "Web-developer",
    },
    description: {
      ru: `CMS NetCat, jQuery, jQuery UI, Bootstrap`,
      by: `CMS NetCat, jQuery, jQuery UI, Bootstrap`,
      en: `CMS NetCat, jQuery, jQuery UI, Bootstrap`,
    },
    startDate: new Date("2013-10-01"),
    endDate: new Date("2014-10-01"),
  },
];

export { WORK_EXPERIENCE_LIST };
