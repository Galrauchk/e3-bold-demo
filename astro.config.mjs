// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://e3-bold-demo.netlify.app',
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/politique-confidentialite') &&
        !page.includes('/politique-cookies'),
    }),
    robotsTxt(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
