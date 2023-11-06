const { defineConfig } = require("cypress");


// .env -> variables

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportFilename: "[status]_[datetime]-[name]-report",
  },
  defaultCommandTimeout: 500,
  pageLoadTimeout: 10000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  video: true,
  retries: {
    openMode: 1,
    runMode: 2
  },
  numTestsKeptInMemory: 25,
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
