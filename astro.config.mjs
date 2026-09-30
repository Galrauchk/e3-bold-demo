// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// Assistants IA nommés : mêmes règles que le groupe *.
const ROBOTS_IA = [
  'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'CCBot',
  'Bingbot', 'meta-externalagent', 'Meta-ExternalFetcher',
  'MistralAI-User', 'DuckAssistBot', 'Amazonbot',
];

export default defineConfig({
  site: 'https://e3-bold-demo.netlify.app',
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/politique-confidentialite') &&
        !page.includes('/politique-cookies'),
    }),
    robotsTxt({
      policy: [
        { userAgent: '*', allow: '/' },
        ...ROBOTS_IA.map((userAgent) => ({ userAgent, allow: '/' })),
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
