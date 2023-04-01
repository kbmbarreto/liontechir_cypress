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
    env: {
      correctEmail: "vini_santos7@live.com",
      incorrectEmail: "vini7@bol.br",
      correctPassword: "V!nibj@E2@",
      incorrectPassword: "abc123",
      hideXhr: true
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});