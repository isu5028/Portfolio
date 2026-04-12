// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-sepia-eta-83.vercel.app/',
  integrations: [tailwind()],
});
