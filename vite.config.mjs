import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import manifest from './manifest.json';
import { crx } from '@crxjs/vite-plugin';

import checker from 'vite-plugin-checker';

export default defineConfig(() => {
  return {
    base: '/',
    build: {
      outDir: 'dist',
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
