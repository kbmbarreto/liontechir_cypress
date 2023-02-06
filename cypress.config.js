const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://painel.liontechir.com.br',
    specPattern: 'cypress/e2e/*',
    experimentalRunAllSpecs: true,
    projectId: 'rqwqud', 
    viewportWidth: 1024,
    viewportHeight: 768,
    mobile: {
      viewportWidth: 768, 
      viewportHeight: 812,
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});