import type { SiteConfig } from "../types";
import resumePdf from "../assets/resume.pdf";

export const siteConfig: SiteConfig = {
  developer: {
    name: "Barış Atay",
    alias: "barisatay0",
    role: {
      en: "Software Developer",
      tr: "Yazılım Geliştirici",
    },
    system: "x86_64 Arch Linux",
    bio: {
      en: "Obsessed with performance and architecture. I don't just write code that works — I design and build systems that scale. Focusing on type-safe, high-performance backends using modern runtimes.",
      tr: "Performans ve mimari tutkunu. Sadece çalışan kodlar yazmıyor, ölçeklenebilir sistemler tasarlıyor ve inşa ediyorum. Tip güvenli ve yüksek performanslı sistemlere odaklanıyorum.",
    },
    avatar: "https://avatars.githubusercontent.com/u/114981821?v=4",
    resume: resumePdf,
  },
  socials: {
    github: "https://github.com/barisatay0",
    linkedin: "https://www.linkedin.com/in/barış-atay",
    email: "mailto:barisatay0@hotmail.com",
  },
};
