import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import decapCmsOauth from "astro-decap-cms-oauth";

export default defineConfig({
  site: "https://adechlien.blog",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    decapCmsOauth({
      baseUrl: "https://adechlien.blog",
      authPath: "/api/auth",
    }),
  ],
});
