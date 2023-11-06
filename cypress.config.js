const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5ooti3',
  e2e: {
    baseUrl:'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
