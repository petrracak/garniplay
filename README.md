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

## Vídeos e delay (VTurb)

- Os IDs dos vídeos e o segundo do pitch ficam em `src/config.ts` → `VSL`.
- Tudo abaixo do vídeo tem a classe `esconder` e aparece no pitch (delay oficial da VTurb, com `persist`: quem volta vê tudo).
- Para revisar a página sem assistir o vídeo: adicione `?preview=1` ao endereço.
- Se o player não carregar em 15 s (bloqueador, falha de rede), o conteúdo é liberado para a página não ficar sem oferta.
- A hero com a foto da Fernanda (para uma landing sem VSL) está guardada em `src/components/HeroFoto.astro`.

## Upsell (IPS)

Compra e recusa acontecem no widget "Sales Funnel" da Hotmart (`src/components/ips/HotmartWidget.astro`). Os destinos dos botões são configurados no funil, na Hotmart.

## Pendências

- [ ] Depoimentos: marcados em `src/pages/index.astro`
- [ ] Seção de preço: marcada em `src/pages/index.astro`
- [ ] Links de termos/privacidade/suporte em `src/config.ts` → `LEGAL`
- [ ] WhatsApp de suporte em `src/config.ts` → `THANKS`
