import { defineConfig } from 'cypress'
import coverageTask from '@cypress/code-coverage/task'

export default defineConfig({
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads',
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    supportFile: 'cypress/support/commands.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      coverageTask(on, config)
      // implement node event listeners here
      return config
    },
  },

  component: {
    specPattern: 'cypress/components/**/*.cy.tsx',
    supportFile: 'cypress/support/component.ts',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      coverageTask(on, config)
      return config
    },
  },
})
