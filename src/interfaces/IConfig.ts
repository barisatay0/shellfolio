export interface IConfig {
  developer: {
    name: string;
    alias: string;
    role: string;
    system: string;
    bio: string;
  };
  socials: Record<string, string>;
  skills: { category: string; items: string[] }[];
  projects: {
    id: string;
    name: string;
    description: string;
    url?: string;
    stack: string[];
    status: "PROD" | "BETA" | "DEPRECATED";
    latency: string;
  }[];
}
