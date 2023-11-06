## Cypress Junior course

This repository contains code examples from the lectures. And other information that you might find useful for the final project.

## Useful NPM commands

### How to initiate Node project:

`npm init`

### How to install NPM packages:

`npm isntall package_name --save-dev`

### How to install NPM packages globally:

`npm install -g package_name`

### How to NPM scripts from your project:

First you need to define script in the `package.json` (see examples) and then you can use it to perform various actions

``` javascript
"scripts": {
    "cypress:open": "cypress open" // this would open Cypress app
}
```

Then you would just call from the command line like so: 

`npm run cypress:open`

### How to run Cypress in headless mode:

`npm run cypress:run`

### How to run Cypress in E2E mode 


`npm cypress:run --e2e`

### How to specify particular browser for the Cypress to execute

`npm run cypress:run --browser chrome/firefox/elector/etc`

If `--browser` flag is not specified Cypress will run tests against `Electron` browser by default.
