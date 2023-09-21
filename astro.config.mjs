import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), svelte(), prefetch(), mdx()],
});
