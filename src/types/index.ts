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
  };
  socials: Record<string, string>;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export type ProjectStatus = "ACTIVE" | "WIP" | "MAINTAINED" | "ARCHIVED";

export interface Project {
  id: string;
  name: string;
  description: LocalizedString;
  url?: string;
  github?: string;
  logo?: string;
  images?: string[];
  stack: string[];
  status: ProjectStatus;
  version: string;
  year: string;
  license: string;
}
