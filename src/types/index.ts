import type { ImageMetadata } from "astro";

export interface LocalizedString {
  en: string;
  tr: string;
  [key: string]: string;
}

export interface SiteConfig {
  developer: {
    name: string;
    alias: string;
    role: LocalizedString;
    system: string;
    bio: LocalizedString;
    avatar?: string;
    resume?: string;
  };
  socials: Record<string, string>;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export type ProjectStatus = "DEVELOPMENT" | "MAINTAINED" | "UNMAINTAINED";

export interface Project {
  id: string;
  name: string;
  description: LocalizedString;
  url?: string;
  github?: string;
  logo?: ImageMetadata;
  images?: ImageMetadata[];
  stack: string[];
  status: ProjectStatus;
  visibility: "PUBLIC" | "PRIVATE";
  year: string;
  license: string;
}

export interface Experience {
  id: string;
  company: string;
  role: LocalizedString;
  type: string;
  workspace: string;
  duration: LocalizedString;
  description: LocalizedString;
  stack: string[];
  url?: string;
}
