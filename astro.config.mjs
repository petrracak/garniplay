// @ts-check
import { defineConfig } from 'astro/config';

// Na Vercel, a URL de produção vem da variável de sistema VERCEL_PROJECT_PRODUCTION_URL.
// Quando houver domínio próprio, troque por ele (ex.: 'https://garniplay.com.br').
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:4321';

export default defineConfig({
  site,
  build: {
    // CSS embutido no HTML: elimina a requisição que bloqueia a renderização.
    inlineStylesheets: 'always',
  },
  image: {
    // Só WebP, com qualidade alta o suficiente para a foto da Fernanda.
    service: { entrypoint: 'astro/assets/services/sharp', config: { limitInputPixels: false } },
  },
  devToolbar: { enabled: false },
});
