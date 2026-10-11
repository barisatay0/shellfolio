import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  developer: {
    name: "Alex Developer",
    alias: "alexdev",
    role: {
      en: "Software Engineer",
      tr: "Yazılım Mühendisi",
    },
    system: "MacOS Sequoia",
    status: {
      en: "Available for new opportunities",
      tr: "Yeni fırsatlara açık",
    },
    bio: {
      en: "Obsessed with performance and architecture. I design and build systems that scale. Focusing on type-safe, high-performance backends using modern runtimes.",
      tr: "Performans ve mimari tutkunu. Sadece çalışan kodlar yazmıyor, ölçeklenebilir sistemler tasarlıyor ve inşa ediyorum. Tip güvenli ve yüksek performanslı sistemlere odaklanıyorum.",
    },
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400&h=400",
  },
  socials: {
    github: "https://github.com/alexdev",
    linkedin: "https://linkedin.com/in/alexdev",
    email: "mailto:hello@alexdev.com",
  },
  ecosystem: {
    title: {
      en: "High-Performance Ecosystem",
      tr: "Yüksek Performanslı Ekosistem",
    },
    description: {
      en: "Building scalable systems with Rust, Node.js, and modern databases.",
      tr: "Rust, Node.js ve modern veritabanları ile ölçeklenebilir sistemler inşa ediyorum.",
    },
    linkText: {
      en: "Explore full tech stack",
      tr: "Tüm teknoloji yığınını incele",
    },
  },
};
