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
export type Visibility = "PUBLIC" | "PRIVATE";

interface BaseContent {
  id: string;
  description: LocalizedString;
  stack: string[];
  url?: string;
}

export interface Project extends BaseContent {
  name: string;
  github?: string;
  logo?: ImageMetadata;
  images?: ImageMetadata[];
  status: ProjectStatus;
  visibility: Visibility;
  year: string;
  license: string;
}

export interface CompanyProject {
  name: string;
  description: LocalizedString;
  url?: string;
  logo?: ImageMetadata;
  images?: ImageMetadata[];
}

export interface Experience extends BaseContent {
  company: string;
  role: LocalizedString;
  type: string;
  workspace: string;
  duration: LocalizedString;
  projects?: CompanyProject[];
}
