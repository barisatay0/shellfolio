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
    duration: {
      en: "Jul 2024 - Present",
      tr: "Tem 2024 - Günümüz",
    },
    description: {
      en: "Architected high-performance, event-driven backend services using Node.js and Bun. Designed microservices communicating via RabbitMQ and Mosquitto, and optimized data-intensive queries using PostgreSQL and TimescaleDB. Built modern, lightweight APIs with ElysiaJS and Hono. Offloaded CPU-intensive tasks to high-performance background workers developed in Rust (Tokio). Implemented Clean Architecture, DDD, and Dockerized CI/CD pipelines.",
      tr: "Node.js ve Bun kullanarak yüksek performanslı, olay güdümlü (event-driven) backend servisleri mimarisi tasarladım ve geliştirdim. RabbitMQ ve Mosquitto ile güvenilir mikroservis iletişimi kurdum, PostgreSQL ve TimescaleDB ile veritabanı sorgularını optimize ettim. ElysiaJS ve Hono ile hafif API'ler oluşturdum. İşlemci (CPU) yoğunluklu görevleri Rust (Tokio) ile yazılmış yüksek performanslı arka plan worker'larına devrettim. Clean Architecture, DDD ve Docker tabanlı CI/CD süreçlerini uyguladım.",
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
