// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || `http://localhost:${process.env.PORT || 4321}`,
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "always",
  },
  integrations: [sitemap()],
  image: {
    domains: [
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
      "github-production-user-asset-6210df.s3.amazonaws.com",
    ],
  },
});
