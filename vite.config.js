import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const repoBase = '/test-browser-hdr-image/';
const siteOrigin = 'https://EvgenyLeukhin.github.io';
const oldHdrImageUrl = `${siteOrigin}${repoBase}hdr-image.jpg`;

/**
 * После сборки og:image / twitter:image должны указывать на хешированный файл в assets/,
 * иначе превью в соцсетях получат 404.
 */
function ogImageFromBundle() {
  return {
    name: 'og-image-from-bundle',
    async closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const assetsDir = path.join(distDir, 'assets');
      let files;
      try {
        files = await fs.readdir(assetsDir);
      } catch {
        return;
      }
      const hdrFile = files.find((f) => /^hdr-image-[^.]+\.jpg$/i.test(f));
      if (!hdrFile) {
        return;
      }
      const newUrl = `${siteOrigin}${repoBase}assets/${hdrFile}`;
      const indexPath = path.join(distDir, 'index.html');
      let html = await fs.readFile(indexPath, 'utf8');
      if (!html.includes(oldHdrImageUrl)) {
        return;
      }
      html = html.split(oldHdrImageUrl).join(newUrl);
      await fs.writeFile(indexPath, html);
    },
  };
}

export default defineConfig(({ command }) => ({
  root: 'src',
  // '/' в dev; './' в production — пути к CSS/JS относительные, чтобы `vite preview` с http://localhost:4173/ и GitHub Pages работали без префикса в URL вкладки
  base: command === 'serve' ? '/' : './',
  publicDir: path.resolve(__dirname, 'public'),
  plugins: [ogImageFromBundle()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    cssMinify: true,
    minify: 'esbuild',
    target: 'es2018',
    sourcemap: false,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
}));
