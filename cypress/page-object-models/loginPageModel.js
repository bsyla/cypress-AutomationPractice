export default class LoginPageModel {
  constructor() {}

  getLogo() {
    return cy.get("[class='login_logo']")
  }

  getUserNameInput() {
    return cy.get("[data-test='username']")
  }

  userLogin() {

  }
}
