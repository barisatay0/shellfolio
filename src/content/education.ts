import type { Education } from "../types";

export const educations: Education[] = [
  {
    id: "EDU-01",
    degree: {
      en: "Bachelor's Degree",
      tr: "Lisans Derecesi",
    },
    school: {
      en: "State University",
      tr: "Devlet Üniversitesi",
    },
    duration: {
      en: "2018 - 2022",
      tr: "2018 - 2022",
    },
    field: {
      en: "Computer Science",
      tr: "Bilgisayar Mühendisliği",
    },
    description: {
      en: "Graduated with Honors. Specialized in Software Engineering and Distributed Systems. Completed a capstone project on scalable microservices.",
      tr: "Onur derecesiyle mezun oldu. Yazılım Mühendisliği ve Dağıtık Sistemler alanında uzmanlaştı. Ölçeklenebilir mikroservisler üzerine bitirme projesi tamamladı.",
    },
  },
  {
    id: "EDU-02",
    degree: {
      en: "High School Diploma",
      tr: "Lise Diploması",
    },
    school: {
      en: "Science High School",
      tr: "Fen Lisesi",
    },
    duration: {
      en: "2014 - 2018",
      tr: "2014 - 2018",
    },
    field: {
      en: "Science and Mathematics",
      tr: "Fen ve Matematik",
    },
  },
];
