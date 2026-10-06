# Garniplay — página de vendas

Landing page do Garniplay (Fernanda Garnizet). Feita em [Astro](https://astro.build): o resultado é HTML estático, com CSS e JS embutidos, publicado na Vercel a cada push na `main`.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:4321.

## Onde mexer

| O quê | Onde |
|---|---|
| Link do checkout (todos os botões) | `src/config.ts` → `CHECKOUT_URL` |
| Links de termos, privacidade e suporte | `src/config.ts` → `LEGAL` |
| Título e descrição para Google/WhatsApp | `src/config.ts` → `SITE` |
| Textos de cada seção | `src/components/<Seção>.astro` |
| Cores, fontes, botões | `src/styles/global.css` |
| Ordem das seções | `src/pages/index.astro` |

## Imagens

Os arquivos originais ficam em `_originais/`. Depois de trocar algum deles, rode:

```bash
npm run assets
```

O script recorta a foto da hero, gera favicons e a imagem de compartilhamento (`public/og-image.jpg`). No build, o Astro converte tudo para WebP em vários tamanhos.

## Pendências

- [ ] VSL (vturb) na hero: espaço marcado em `src/components/Hero.astro`
- [ ] Depoimentos: marcados em `src/pages/index.astro`
- [ ] Seção de preço: marcada em `src/pages/index.astro`
- [ ] Link do checkout e links de termos/privacidade/suporte em `src/config.ts`
