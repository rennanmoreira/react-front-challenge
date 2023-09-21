/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import istanbul from 'vite-plugin-istanbul'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  build: {
    sourcemap: true,
  },
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: './tests/coverage',
      exclude: ['**/node_modules/**', '**/tests/**'],
      include: ['**/src/**'],
    },
    globals: true,
    environment: 'jsdom',
  },
})
