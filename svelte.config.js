import { vitePreprocess } from "@astrojs/svelte";
import adapter from "@sveltejs/adapter-cloudflare";

export default {
  preprocess: vitePreprocess(),
};
