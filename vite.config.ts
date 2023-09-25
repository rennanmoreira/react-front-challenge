/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import istanbul from 'vite-plugin-istanbul'
import { browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [
        [
          '@swc/plugin-styled-components',
          {
            displayName: true,
            ssr: false,
            minify: false,
            fileName: false,
          },
        ],
      ],
    }),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },

  build: {
    sourcemap: true,
    cssMinify: 'lightningcss',
    minify: false,
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
