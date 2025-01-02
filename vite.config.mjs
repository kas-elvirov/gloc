import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

import manifest from './manifest.json';
import { crx } from '@crxjs/vite-plugin';

import checker from 'vite-plugin-checker';

const viteManifestHackIssue846 = {
  name: 'manifestHackIssue846',
  renderCrxManifest(manifest, bundle) {
    bundle['manifest.json'] = bundle['.vite/manifest.json'];
    bundle['manifest.json'].fileName = 'manifest.json';
    delete bundle['.vite/manifest.json'];
  },
};

export default defineConfig(() => {
  return {
    base: '/',
    build: {
      outDir: path.join(__dirname, 'dist'),
      target: 'esnext',
      sourcemap: false,
      rollupOptions: {
        input: {
          popup: './public/popup.html',
          options: './public/options.html',
        },
      },
    },
    plugins: [
      // viteManifestHackIssue846,

      react(),

      crx({ manifest }),

      checker({
        typescript: {
          tsconfigPath: './tsconfig.json'
        },
        eslint: {
          lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"'
        },
      }),
    ],
  };
});
