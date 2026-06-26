import type { Experience } from "../types";

export const experiences: Experience[] = [
    {
        id: "EXP-001",
        company: "TechFlow Inc.",
        role: {
            en: "Senior Full-Stack Engineer",
            tr: "Kıdemli Tam Yığın Geliştirici",
        },
        type: "FULL-TIME",
        workspace: "REMOTE",
        duration: {
            en: "Jan 2022 - Present",
            tr: "Oca 2022 - Günümüz",
        },
        url: "https://example.com",
        description: {
            en: "Led the development of a microservices-based architecture for a high-traffic SaaS platform. Managed a team of 5 developers and improved system performance by 40%.",
            tr: "Yüksek trafikli bir SaaS platformu için mikroservis tabanlı mimari geliştirmesine liderlik ettim. 5 kişilik bir geliştirici ekibini yönettim ve sistem performansını %40 artırdım.",
        },
        stack: ["Node.js", "React", "PostgreSQL", "Docker", "AWS", "Kubernetes"],
        projects: [
            {
                name: "TechFlow Core API",
                description: {
                    en: "A robust GraphQL API handling over 1M requests per day.",
                    tr: "Günde 1 milyondan fazla isteği işleyen güçlü bir GraphQL API.",
                },
                images: [
                    { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000", alt: "API Dashboard" }
                ],
                url: "https://example.com/api"
            }
        ]
    },
    {
        id: "EXP-002",
        company: "Creative Digital",
        role: {
            en: "Frontend Developer",
            tr: "Önyüz Geliştirici",
        },
        type: "FULL-TIME",
        workspace: "HYBRID",
        duration: {
            en: "Mar 2020 - Dec 2021",
            tr: "Mar 2020 - Ara 2021",
        },
        url: "https://example.com",
        description: {
            en: "Developed responsive and accessible web interfaces for enterprise clients. Collaborated closely with the design team to implement pixel-perfect UI components.",
            tr: "Kurumsal müşteriler için duyarlı ve erişilebilir web arayüzleri geliştirdim. Piksel mükemmelliğinde UI bileşenleri oluşturmak için tasarım ekibiyle yakından çalıştım.",
        },
        stack: ["Vue.js", "JavaScript", "SCSS", "Figma", "Jest"],
    },
    {
        id: "EXP-003",
        company: "StartupInc",
        role: {
            en: "Junior Developer",
            tr: "Geliştirici",
        },
        type: "PART-TIME",
        workspace: "OFFICE",
        duration: {
            en: "Jun 2018 - Feb 2020",
            tr: "Haz 2018 - Şub 2020",
        },
        description: {
            en: "Maintained legacy PHP applications and migrated them to modern JavaScript frameworks. Assisted in database design and optimization.",
            tr: "Eski PHP uygulamalarının bakımını yaptım ve onları modern JavaScript çerçevelerine taşıdım. Veritabanı tasarımı ve optimizasyonuna yardımcı oldum.",
        },
        stack: ["PHP", "MySQL", "jQuery", "Bootstrap"],
    }
];
