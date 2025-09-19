import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

// Replace "your-username" and "your-repo" with your GitHub username and repository name
const GITHUB_USERNAME = 'monchiviri27'; 
const GITHUB_REPO = 'nba-blog'; 

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${GITHUB_REPO}`,
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