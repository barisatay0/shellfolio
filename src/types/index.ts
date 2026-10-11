import type { ImageMetadata } from "astro";

export interface LocalizedString {
  en: string;
  tr: string;
  [key: string]: string;
}

export interface EcosystemConfig {
  title: LocalizedString;
  description: LocalizedString;
  linkText: LocalizedString;
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
    status?: LocalizedString;
  };
  socials: Record<string, string>;
  ecosystem?: EcosystemConfig;
}

export interface SkillGroup {
  category: LocalizedString | string;
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
  logo?: ImageMetadata | string;
  images?: (ImageMetadata | string)[] | any[];
  status: ProjectStatus;
  visibility: Visibility;
  year: string | number;
  license: string;
}

export interface CompanyProject {
  name: string;
  description: LocalizedString;
  url?: string;
  logo?: ImageMetadata | string;
  images?: (ImageMetadata | string)[] | any[];
}

export interface Experience extends BaseContent {
  company: string;
  role: LocalizedString;
  type: string;
  workspace: string;
  duration: LocalizedString;
  projects?: CompanyProject[];
}

export interface Education {
  id: string;
  degree: LocalizedString | string;
  school: LocalizedString | string;
  duration: LocalizedString | string;
  field: LocalizedString | string;
  description?: LocalizedString | string;
}
