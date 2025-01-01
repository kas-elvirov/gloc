import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import checker from 'vite-plugin-checker';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [
      react(),

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