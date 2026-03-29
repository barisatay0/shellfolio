export interface SiteConfig {
  developer: {
    name: string;
    alias: string;
    role: string;
    system: string;
    bio: string;
    avatar?: string;
  };
  socials: Record<string, string>;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  github?: string;
  logo?: string;
  images?: string[];
  stack: string[];
  status: "PROD" | "BETA" | "DEPRECATED";
  latency: string;
}
