// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jelopez.link',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  // Scripts y estilos siempre como fichero externo: la CSP de public/_headers
  // no permite nada inline (ni scripts ni estilos).
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});
