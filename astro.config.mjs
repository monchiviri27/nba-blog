import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

export default defineConfig({
  // Las URL deben coincidir exactamente con tu URL de GitHub Pages
  site: 'https://monchiviri27.github.io',
  base: '/nba-blog',
  integrations: [
    tailwind(), 
    mdx(), 
    partytown(), 
    react()
  ],
  markdown: {
    syntaxHighlight: 'prism',
  },
});