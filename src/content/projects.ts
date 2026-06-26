import type { Project, SkillGroup } from "../types";

export const projects: Project[] = [
    {
        id: "PRJ-001",
        name: "E-Commerce Dashboard",
        description: {
            en: "A comprehensive dashboard for managing e-commerce operations. Features real-time sales tracking, inventory management, and automated reporting.",
            tr: "E-ticaret operasyonlarını yönetmek için kapsamlı bir kontrol paneli. Gerçek zamanlı satış takibi, envanter yönetimi ve otomatik raporlama özelliklerine sahip."
        },
        stack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
        visibility: "PUBLIC",
        status: "MAINTAINED",
        year: 2024,
        license: "MIT",
        github: "https://github.com/alexdev",
        url: "https://example.com",
        images: [
            { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", alt: "Dashboard Home" },
            { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", alt: "Analytics View" }
        ]
    },
    {
        id: "PRJ-002",
        name: "Task Management SaaS",
        description: {
            en: "A scalable SaaS platform for remote teams to collaborate efficiently. Integrates with Slack, Google Drive, and features a kanban board system.",
            tr: "Uzaktan çalışan ekiplerin verimli bir şekilde işbirliği yapması için ölçeklenebilir bir SaaS platformu. Slack ve Google Drive ile entegre, kanban panosu sistemine sahip."
        },
        stack: ["Vue.js", "Nuxt", "Node.js", "Express", "MongoDB", "Redis"],
        visibility: "PUBLIC",
        status: "DEVELOPMENT",
        year: 2023,
        license: "Apache 2.0",
        github: "https://github.com/alexdev",
        images: [
            { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000", alt: "Kanban Board" }
        ]
    },
    {
        id: "PRJ-003",
        name: "AI Content Generator",
        description: {
            en: "An AI-powered tool that generates blog posts, social media content, and marketing copy using OpenAI's GPT-4 API.",
            tr: "OpenAI'ın GPT-4 API'sini kullanarak blog yazıları, sosyal medya içeriği ve pazarlama metinleri oluşturan yapay zeka destekli bir araç."
        },
        stack: ["Python", "FastAPI", "React", "OpenAI API", "Docker", "AWS"],
        visibility: "PRIVATE",
        status: "MAINTAINED",
        year: 2023,
        license: "Proprietary",
        images: [
            { src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000", alt: "AI Generation Interface" }
        ]
    },
    {
        id: "PRJ-004",
        name: "Crypto Portfolio Tracker",
        description: {
            en: "A mobile-first web application for tracking cryptocurrency investments, analyzing market trends, and setting price alerts.",
            tr: "Kripto para yatırımlarını takip etmek, piyasa trendlerini analiz etmek ve fiyat alarmları ayarlamak için mobil öncelikli bir web uygulaması."
        },
        stack: ["Svelte", "SvelteKit", "TypeScript", "Tailwind CSS", "CoinGecko API"],
        visibility: "PUBLIC",
        status: "ARCHIVED",
        year: 2022,
        license: "MIT",
        github: "https://github.com/alexdev",
        url: "https://example.com"
    }
];

export const skills: SkillGroup[] = [
    {
        category: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "Rust", "Go", "SQL", "HTML/CSS"],
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Vue.js", "Astro", "Tailwind CSS", "Redux", "Framer Motion"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Prisma"],
    },
    {
        category: "Tools",
        items: ["Git", "Docker", "AWS", "GitHub Actions", "Vercel", "Figma", "Linux", "Nginx"],
    },
];
