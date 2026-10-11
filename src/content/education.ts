import type { Education } from "../types";

export const educations: Education[] = [
  {
    id: "EDU-01",
    degree: {
      en: "Bachelor's Degree",
      tr: "Lisans",
    },
    school: {
      en: "Anadolu University",
      tr: "Anadolu Üniversitesi",
    },
    duration: {
      en: "2024 - Present",
      tr: "2024 - Günümüz",
    },
    field: {
      en: "Management Information Systems",
      tr: "Yönetim Bilişim Sistemleri",
    },
  },
  {
    id: "EDU-02",
    degree: {
      en: "Associate's Degree",
      tr: "Ön Lisans",
    },
    school: {
      en: "Eskişehir Osmangazi University",
      tr: "Eskişehir Osmangazi Üniversitesi",
    },
    duration: {
      en: "2022 - 2024",
      tr: "2022 - 2024",
    },
    field: {
      en: "Computer Programming",
      tr: "Bilgisayar Programcılığı",
    },
  },
];
