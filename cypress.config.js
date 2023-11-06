const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3wqe1n',
  e2e: {
    baseUrl:'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
