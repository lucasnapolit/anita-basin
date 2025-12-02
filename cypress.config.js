const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  // Reporter options control JSON/HTML generation and output folder
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: false,
    html: false,
    json: true,
    quiet: false,
    debug: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
