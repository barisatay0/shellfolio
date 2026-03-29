import type { Project, SkillGroup } from "../types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Lua", "PHP"],
  },
  {
    category: "Backend & Runtimes",
    items: ["Bun", "Node.js", "ElysiaJS", "Hono", "Drizzle ORM"],
  },
  {
    category: "Infra & Databases",
    items: ["PostgreSQL", "TimescaleDB", "Docker", "RabbitMQ", "Mosquitto"],
  },
];

export const projects: Project[] = [
  {
    id: "01",
    name: "bedest",
    description: {
      en: "A production-ready, strictly typed backend foundation built for B2B SaaS and scalable microservices. Powered by Bun, ElysiaJS, and Drizzle ORM.",
      tr: "B2B SaaS ve ölçeklenebilir mikroservisler için üretime hazır, tip destekli backend altyapısı. Bun, ElysiaJS ve Drizzle ORM ile güçlendirildi.",
    },
    github: "https://github.com/bedest-hq/bedest",
    logo: "https://raw.githubusercontent.com/bedest-hq/bedest/main/docs/images/bedest.png",
    stack: ["Bun", "Elysia", "PostgreSQL", "Docker"],
    status: "ACTIVE",
    version: "v1.0.3",
    year: "2026+",
    license: "MIT",
  },
  {
    id: "02",
    name: "shellfolio",
    description: {
      en: "A high-performance, terminal-styled portfolio website built with Astro, TypeScript, and Tailwind CSS. Designed for developers who live in the command line.",
      tr: "Astro, TypeScript ve Tailwind CSS ile oluşturulmuş, yüksek performanslı, terminal temalı portfolyo web sitesi. Komut satırında yaşayan geliştiriciler için tasarlandı.",
    },
    url: "https://www.barisatay.com",
    github: "https://github.com/barisatay0/shellfolio",
    stack: ["Astro", "TypeScript", "TailwindCSS"],
    status: "ACTIVE",
    version: "v1.0.0",
    year: "2026+",
    license: "OSS",
  },
  {
    id: "03",
    name: "typenvim",
    description: {
      en: "A highly optimized, modular Neovim configuration built for speed and muscle memory. Features direct test mappings and fast search.",
      tr: "Hız ve kas hafızası için oluşturulmuş, yüksek düzeyde optimize edilmiş, modüler bir Neovim yapılandırması. Doğrudan test atamaları ve hızlı arama içerir.",
    },
    github: "https://github.com/barisatay0/typenvim",
    stack: ["Lua", "Neovim"],
    status: "MAINTAINED",
    version: "v0.9+",
    year: "2025+",
    license: "OSS",
  },
  {
    id: "04",
    name: "imap-viewer",
    description: {
      en: "A simple, lightweight Python application for retrieving and displaying emails using the IMAP protocol.",
      tr: "IMAP protokolünü kullanarak e-postaları almak ve görüntülemek için basit ve hafif bir Python uygulaması.",
    },
    github: "https://github.com/barisatay0/imap-email-viewer",
    stack: ["Python", "IMAP"],
    status: "ARCHIVED",
    version: "v1.0",
    year: "2024",
    license: "OSS",
  },
  {
    id: "05",
    name: "social-media-platform",
    description: {
      en: "A Totally Professional Social Media Site™ where HTML, CSS, JS, and PHP coexist in chaos. Features a global chat where you can't see your own messages.",
      tr: "HTML, CSS, JS ve PHP'nin kaos içinde bir arada yaşadığı 'Tamamen Profesyonel' bir Sosyal Medya Sitesi™. Kendi mesajlarınızı göremediğiniz bir global sohbet içerir.",
    },
    github: "https://github.com/barisatay0/Social-Media-Platform",
    stack: ["PHP", "JavaScript", "Bootstrap"],
    status: "ARCHIVED",
    version: "legacy",
    year: "2024",
    license: "oss",
  },
];
