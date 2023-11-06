import LoginPageModel from '../page-object-models/loginPageModel'


const loginPage = new LoginPageModel()

describe("Test suite 1", {
  defautCommandTimout: 300,
},() => {
  // Test steps/tests
  before(() => {
    loginPage.userLogin()
  })

  it("[JIRA-NUMBER] [TEST TITLE]", () => {
    cy.visit("/")
    loginPage.getLogo().should("be.visible")
    loginPage.getUserNameInput().type("standard_user").should("be.visible")
  })
})
