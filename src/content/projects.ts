import type { Project, SkillGroup } from "../types";

import bedestLogo from "../assets/logo.bedest.png";
import shellfolioLogo from "../assets/logo.shellfolio.png";
import reneryoLogo from "../assets/logo.reneryo.png";

import reneryo1 from "../assets/reneryo1.webp";
import reneryo2 from "../assets/reneryo2.webp";
import reneryo3 from "../assets/reneryo3.webp";
import reneryo4 from "../assets/reneryo4.webp";

import typenvim1 from "../assets/typenvim1.png";
import typenvim2 from "../assets/typenvim2.png";
import typenvim3 from "../assets/typenvim3.png";

export const skills: SkillGroup[] = [
    {
        "category": "Languages",
        "items": ["TypeScript", "JavaScript", "Rust"]
    },
    {
        "category": "Backend & Runtime",
        "items": ["Node.js", "Bun.js", "ElysiaJS", "Hono"]
    },
    {
        "category": "Database",
        "items": ["PostgreSQL", "MySQL", "TimescaleDB", "Prisma", "Drizzle ORM"]
    },
    {
        "category": "DevOps & Cloud",
        "items": ["Docker", "Amazon S3"]
    },
    {
        "category": "Observability",
        "items": ["OpenTelemetry", "Grafana Loki", "Grafana Tempo"]
    },
    {
        "category": "Message Brokers",
        "items": ["RabbitMQ", "Mosquitto"]
    }
];

export const projects: Project[] = [
    {
        id: "01",
        name: "reneryo",
        description: {
            en: "An AI-powered, real-time energy management platform optimizing industrial efficiency and carbon footprint. Features a predictive AI Decision-Making Engine and an interactive Digital Intelligent Assistant (DIA).",
            tr: "Endüstriyel verimliliği ve karbon ayak izini optimize eden yapay zeka destekli, gerçek zamanlı enerji yönetim platformu. Tahmine dayalı Yapay Zeka Karar Motoru ve Dijital Akıllı Asistan (DIA) içerir.",
        },
        url: "https://reneryo.com",
        logo: reneryoLogo,
        images: [reneryo1, reneryo2, reneryo3, reneryo4],
        stack: [
            "Bun",
            "Node.js",
            "Rust",
            "Hono",
            "PostgreSQL",
            "TimescaleDB",
            "RabbitMQ",
            "Docker",
        ],
        status: "MAINTAINED",
        visibility: "PRIVATE",
        year: "2025+",
        license: "CLOSED",
    },
    {
        id: "02",
        name: "bedest",
        description: {
            en: "A production-ready, strictly typed backend foundation built for B2B SaaS and scalable microservices. Powered by Bun, ElysiaJS, and Drizzle ORM.",
            tr: "B2B SaaS ve ölçeklenebilir mikroservisler için üretime hazır, tip destekli backend altyapısı. Bun, ElysiaJS ve Drizzle ORM ile güçlendirildi.",
        },
        github: "https://github.com/bedest-hq/bedest",
        logo: bedestLogo,
        stack: ["Bun", "Elysia", "PostgreSQL", "Docker"],
        status: "MAINTAINED",
        visibility: "PUBLIC",
        year: "2026+",
        license: "MIT",
    },
    {
        id: "03",
        name: "shellfolio",
        description: {
            en: "A high-performance, terminal-styled portfolio website built with Astro, TypeScript, and Tailwind CSS. Designed for developers who live in the command line.",
            tr: "Astro, TypeScript ve Tailwind CSS ile oluşturulmuş, yüksek performanslı, terminal temalı portfolyo web sitesi. Komut satırında yaşayan geliştiriciler için tasarlandı.",
        },
        url: "https://www.barisatay.com",
        github: "https://github.com/barisatay0/shellfolio",
        logo: shellfolioLogo,
        stack: ["Astro", "TypeScript", "TailwindCSS"],
        status: "DEVELOPMENT",
        visibility: "PUBLIC",
        year: "2026+",
        license: "MIT",
    },
    {
        id: "04",
        name: "typenvim",
        description: {
            en: "A highly optimized, modular Neovim configuration built for speed and muscle memory. Features direct test mappings and fast search.",
            tr: "Hız ve kas hafızası için oluşturulmuş, yüksek düzeyde optimize edilmiş, modüler bir Neovim yapılandırması. Doğrudan test atamaları ve hızlı arama içerir.",
        },
        github: "https://github.com/barisatay0/typenvim",
        stack: ["Lua", "Neovim"],
        images: [typenvim1, typenvim2, typenvim3],
        status: "MAINTAINED",
        visibility: "PUBLIC",
        year: "2025+",
        license: "OSS",
    },
    {
        id: "05",
        name: "imap-viewer",
        description: {
            en: "A simple, lightweight Python application for retrieving and displaying emails using the IMAP protocol.",
            tr: "IMAP protokolünü kullanarak e-postaları almak ve görüntülemek için basit ve hafif bir Python uygulaması.",
        },
        github: "https://github.com/barisatay0/imap-email-viewer",
        stack: ["Python", "IMAP"],
        status: "UNMAINTAINED",
        visibility: "PUBLIC",
        year: "2024",
        license: "OSS",
    },
    {
        id: "06",
        name: "social-media-platform",
        description: {
            en: "A Totally Professional Social Media Site™ where HTML, CSS, JS, and PHP coexist in chaos. Features a global chat where you can't see your own messages.",
            tr: "HTML, CSS, JS ve PHP'nin kaos içinde bir arada yaşadığı 'Tamamen Profesyonel' bir Sosyal Medya Sitesi™. Kendi mesajlarınızı göremediğiniz bir global sohbet içerir.",
        },
        github: "https://github.com/barisatay0/Social-Media-Platform",
        stack: ["PHP", "JavaScript", "Bootstrap"],
        status: "UNMAINTAINED",
        visibility: "PUBLIC",
        year: "2024",
        license: "OSS",
    },
];
