import type { Experience } from "../types";

export const experiences: Experience[] = [
    {
        id: "EXP-01",
        company: "A Arti Engineering",
        role: {
            en: "Backend Developer",
            tr: "Backend Geliştirici",
        },
        type: "Full-time",
        workspace: "Hybrid",
        duration: {
            en: "Jul 2024 - Present",
            tr: "Tem 2024 - Günümüz",
        },
        description: {
            en: "Designed and implemented high-performance, event-driven backend services using Node.js and Bun. Developed microservices communicating via RabbitMQ and Mosquitto, and optimized complex queries with PostgreSQL and TimescaleDB. Built modern, lightweight APIs with Hono. Delegated CPU-intensive and analytical tasks to high-performance background workers written in Rust. Applied Clean Architecture, Domain-Driven Design (DDD), and Docker-based CI/CD pipelines.",
            tr: "Node.js ve Bun kullanarak yüksek performanslı, event-driven backend servisleri mimarisi tasarladım ve geliştirdim. RabbitMQ ve Mosquitto ile güvenilir mikroservis iletişimi kurdum, PostgreSQL ve TimescaleDB ile veritabanı sorgularını optimize ettim. Hono ile hafif API'ler oluşturdum. İşlemci yoğunluklu analiz görevlerini Rust ile yazılmış yüksek performanslı arka plan worker'larına devrettim. Clean Architecture, DDD ve Docker tabanlı CI/CD süreçlerini uyguladım.",
        },
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
    },
];
