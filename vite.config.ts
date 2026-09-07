import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { seoPlugin } from './scripts/vite-plugin-seo';

/**
 * Multi-Page-Build: jede Seite bekommt eine echte HTML-Datei mit eigenen
 * Metadaten. Dadurch sind Titles, Descriptions, Canonicals und JSON-LD auch
 * ohne JavaScript im Quelltext vorhanden.
 */
export default defineConfig({
  plugins: [react(), seoPlugin()],
  resolve: {
    /**
     * React-API bleibt unverändert, im Build wird aber die deutlich kleinere
     * Preact-Runtime (compat) ausgeliefert. Spart rund 130 kB JavaScript.
     */
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/client': 'preact/compat/client',
      'react/jsx-runtime': 'preact/compat/jsx-runtime',
    },
  },
  // relative Asset-Pfade, damit die Seite auch in einem Unterordner läuft
  base: './',
  build: {
    target: 'es2020',
    // keine Source Maps in Production
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 2048,
    reportCompressedSize: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        imprint: resolve(__dirname, 'impressum/index.html'),
        privacy: resolve(__dirname, 'datenschutz/index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
      output: {
        // React-Runtime in einen eigenen, langfristig cachebaren Chunk
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
          if (id.includes('/src/sections/')) return 'sections';
          return undefined;
        },
      },
    },
  },
});
