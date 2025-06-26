const { defineConfig } = require("cypress");
require('dotenv').config();


module.exports = defineConfig({
  "$schema": "https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      EMAIL: process.env.CYPRESS_EMAIL,
      PASSWORD: process.env.CYPRESS_PASSWORD
    }

  },
});
