import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["lh3.googleusercontent.com"],
  },
  integrations: [tailwind(), react(),]
});