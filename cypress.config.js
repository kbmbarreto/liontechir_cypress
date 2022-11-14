const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  video: false,
  projectId: 'rqwqud',
  e2e: {
    baseUrl: 'https://painel.liontechir.com.br/',
    specPattern: 'cypress/e2e/*',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')
      (on, config)
    }
  },
})