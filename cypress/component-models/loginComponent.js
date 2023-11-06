export default class LoginComponent {
  //
  getUsernameInput() {

  }

  getPasswordInput() {

  }

  getLoginButton() {

  }

  userLogin(userName, password) {
    cy.visit("/")
    cy.get("[data-test='username']").type("standard_user").should("be.visible")
    cy.get("[data-test='password']").type("secret_sauce").should("exist")
    cy.get("[data-test='login-button']").click()

    // First way
    cy.contains("[class='title']", "Products").should("be.visible")
    // Intercpeting calls
  }
}
