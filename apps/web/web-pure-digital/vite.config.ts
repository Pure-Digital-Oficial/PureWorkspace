/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/web/web-pure-digital',
  server: {
    port: parseInt(process.env['WEB_PURE_DIGITAL_PORT'] ?? '4200'),
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: {
      '@pureWorkspace/feature': path.resolve(
        __dirname,
        '../../../libs/feature/src/index.ts'
      ),
      '@pureWorkspace/domain': path.resolve(
        __dirname,
        '../../../libs/domain/src/index.ts'
      ),
    },
  },
});
