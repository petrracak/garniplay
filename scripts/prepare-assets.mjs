// Gera os assets otimizados a partir de _originais/.
// Rode com `npm run assets` sempre que trocar uma imagem original.
// As imagens de conteúdo vão para src/assets (o Astro gera os tamanhos WebP no build);
// favicons e imagem de compartilhamento vão para public/.
import sharp from 'sharp';
import { writeFile, copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const SRC = new URL('../_originais/', import.meta.url);
const ASSETS = new URL('../src/assets/', import.meta.url);
const PUBLIC = new URL('../public/', import.meta.url);
const src = (f) => fileURLToPath(new URL(f, SRC));

await mkdir(new URL('brand/', ASSETS), { recursive: true });


// Foto da hero (mobile e desktop): recorte do arquivo desktop (2560px), que tem a Fernanda em
// resolução ~3x maior que o arquivo mobile. Mesma composição: rosto, brinquedos e ombros.
await sharp(src('hero-desktop.webp'))
  .extract({ left: 1130, top: 0, width: 1050, height: 1050 })
  .webp({ quality: 90 })
  .toFile(fileURLToPath(new URL('hero-fernanda.webp', ASSETS)));

// Lâminas das atividades: PNGs de 1–3 MB viram WebP de alta qualidade (o Astro gera os tamanhos).
await mkdir(new URL('atividades/', ASSETS), { recursive: true });
for (const name of ['sistema-atencional', 'orientacao-temporal', 'dominancia-lateral', 'linguagem-oral', 'raciocinio-matematico', 'linguagem-interpretacao']) {
  await sharp(src(`atividades/${name}.png`))
    .resize({ width: 2000, withoutEnlargement: true })
    .webp({ quality: 86 })
    .toFile(fileURLToPath(new URL(`atividades/${name}.webp`, ASSETS)));
}

// Foto da Fernanda para a seção "Quem criou" (já vem com cantos arredondados e fundo roxo).
await sharp(src('foto-fernanda.webp')).webp({ quality: 88 }).toFile(fileURLToPath(new URL('fernanda.webp', ASSETS)));

// Brinquedos flutuantes: corta a área transparente em volta e reduz (são usados pequenos).
await mkdir(new URL('brinquedos/', ASSETS), { recursive: true });
for (const [from, to] of [['brinquedo-1.webp', 'cubo'], ['brinquedo-2.webp', 'aviao']]) {
  await sharp(src(from))
    .trim({ threshold: 1 })
    .resize({ width: 640, height: 640, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90 })
    .toFile(fileURLToPath(new URL(`brinquedos/${to}.webp`, ASSETS)));
}

for (const name of ['logo-colorida', 'logo-branca', 'logo-preta', 'favicon']) {
  await copyFile(src(`${name}.png`), fileURLToPath(new URL(`brand/${name}.png`, ASSETS)));
}

// Favicons (PNG é o formato exigido pelo iOS e pelo .ico).
const icon = (size, bg) =>
  sharp(src('favicon.png'))
    .resize(Math.round(size * (bg ? 0.82 : 1)), Math.round(size * (bg ? 0.82 : 1)), { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend(bg ? { top: Math.round(size * 0.09), bottom: Math.round(size * 0.09), left: Math.round(size * 0.09), right: Math.round(size * 0.09), background: bg } : { top: 0, bottom: 0, left: 0, right: 0 })
    .resize(size, size)
    .flatten(bg ? { background: bg } : false)
    .png({ compressionLevel: 9, palette: true });

await icon(32).toFile(fileURLToPath(new URL('favicon-32.png', PUBLIC)));
await icon(192).toFile(fileURLToPath(new URL('favicon-192.png', PUBLIC)));
await icon(180, '#ffffff').toFile(fileURLToPath(new URL('apple-touch-icon.png', PUBLIC)));

// favicon.ico com o PNG de 32px embutido (formato ICO aceita PNG direto).
const png32 = await icon(32).toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14); header.writeUInt32LE(22, 18);
await writeFile(fileURLToPath(new URL('favicon.ico', PUBLIC)), Buffer.concat([header, png32]));

// Imagem de compartilhamento (WhatsApp, Instagram, Facebook): 1200x630.
// A foto ocupa x≈726–1263 após o resize; o recorte a deixa à direita e libera espaço para o logo.
const og = await sharp(src('hero-desktop.webp')).resize({ height: 630 }).toBuffer();
const logo = await sharp(src('logo-colorida.png')).resize({ width: 540 }).toBuffer();
await sharp(og)
  .extract({ left: 110, top: 0, width: 1200, height: 630 })
  .composite([{ input: logo, left: 40, top: 230 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(fileURLToPath(new URL('og-image.jpg', PUBLIC)));

console.log('Assets gerados.');
