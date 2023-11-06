import LoginComponent from '../component-models/loginComponent'

const loginComponent = new LoginComponent()

export default class InvetoryPageModel {
  visit() {
    cy.visit("https://www.saucedemo.com/inventory.html")
  }

  getProductCardHeader(headerName) {
    // return cy.get("[class='inventory_item_name']")
    return cy.contains("[class='inventory_item_name']", headerName)
  }

  userLogin() {
    loginComponent.userLogin()
  }
}
