import type { IConfig } from "../interfaces/IConfig";

export const CONFIG: IConfig = {
  developer: {
    name: "Alex Chen",
    alias: "alexcodes",
    role: "Backend & Systems Engineer",
    system: "x86_64 Linux 6.8.0-kernel",
    bio: "Building distributed systems and high-throughput APIs. Writing code that sleeps so servers don't have to.",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:root@localhost",
  },
  skills: [
    { category: "Languages", items: ["Rust", "Go", "TypeScript", "Python"] },
    {
      category: "Infrastructure",
      items: ["Kubernetes", "Docker", "AWS", "Terraform"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "Redis", "Cassandra", "MongoDB"],
    },
  ],
  projects: [
    {
      id: "PRJ-01",
      name: "quantum-auth-service",
      description:
        "Distributed authentication microservice handling 50k req/sec.",
      url: "https://github.com/alexcodes/quantum-auth",
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
  ],
};
