// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages veröffentlicht die Seite unter https://<name>.github.io/<repo>/.
// Der Pfad kommt im Deployment aus der Pages-Konfiguration (BASE_PATH),
// lokal gilt /digital-helfer.
const base = process.env.BASE_PATH || '/digital-helfer';
const site = process.env.SITE_URL || 'https://seb-nsu.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
