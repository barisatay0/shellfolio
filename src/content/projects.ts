import type { Project, SkillGroup } from "../types";

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["Rust", "Go", "TypeScript", "Python"] },
  {
    category: "Infrastructure",
    items: ["Kubernetes", "Docker", "AWS", "Terraform"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Redis", "Cassandra", "MongoDB"],
  },
];

export const projects: Project[] = [
  {
    id: "PRJ-01",
    name: "quantum-auth-service",
    description:
      "Distributed authentication microservice handling 50k req/sec.",
    url: "https://github.com/alexcodes/quantum-auth",
    github: "https://github.com/alexcodes/quantum-auth",
    logo: "https://cdn-icons-png.flaticon.com/512/2885/2885412.png",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=300&q=80",
    ],
    stack: ["Rust", "Redis"],
    status: "PROD",
    latency: "12ms",
  },
  {
    id: "PRJ-02",
    name: "nexus-event-bus",
    description: "Real-time analytics and event streaming engine.",
    url: "https://github.com/alexcodes/nexus-bus",
    stack: ["Go", "Kafka"],
    status: "BETA",
    latency: "45ms",
  },
  {
    id: "PRJ-03",
    name: "legacy-monolith",
    description:
      "Old monolithic core system. Currently being migrated to microservices.",
    stack: ["Node.js", "Express"],
    status: "DEPRECATED",
    latency: "250ms",
  },
];
