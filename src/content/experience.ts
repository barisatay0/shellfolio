import type { Experience } from "../types";

import reneryoLogo from "../assets/logo.reneryo.png";
import reneryo1 from "../assets/reneryo1.webp";
import reneryo2 from "../assets/reneryo2.webp";
import reneryo3 from "../assets/reneryo3.webp";
import reneryo4 from "../assets/reneryo4.webp";

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
    projects: [
      {
        name: "Reneryo",
        description: {
          en: "An AI-powered, real-time energy management platform optimizing industrial efficiency and carbon footprint. Features a predictive AI Decision-Making Engine and an interactive Digital Intelligent Assistant (DIA).",
          tr: "Endüstriyel verimliliği ve karbon ayak izini optimize eden yapay zeka destekli, gerçek zamanlı enerji yönetim platformu. Tahmine dayalı Yapay Zeka Karar Motoru ve Dijital Akıllı Asistan (DIA) içerir.",
        },
        url: "https://reneryo.com",
        logo: reneryoLogo,
        images: [reneryo1, reneryo2, reneryo3, reneryo4],
      },
    ],
  },
];
