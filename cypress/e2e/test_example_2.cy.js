import LoginPageModel from '../page-object-models/loginPageModel'
import InvetoryPageModel from '../page-object-models/inventoryPageModel'


const invetoryPage = new InvetoryPageModel()

describe("Test Invetory", () => {
  const invetoryPage = new InvetoryPageModel()

  before(() => {
    // Precondition
    invetoryPage.userLogin()
  })

  it("Verify product card header is visible", () => {
    invetoryPage.getProductCardHeader("Sauce Labs Backpack").should("be.visible")
  })
})
