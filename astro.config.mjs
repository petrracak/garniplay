// @ts-check
import { defineConfig } from 'astro/config';

// Domínio oficial: usado no link canônico e na imagem de compartilhamento (WhatsApp, redes).
const site = 'https://garniplay.fernandagarnizet.com.br';

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
