import ProductObjects from "../pageObjects/productObjects"
import SignupFlow from "../pageObjects/signupFlow"
import CategoriesObjects from "../pageObjects/categoriesObjects"
const product = new ProductObjects()
const signup = new SignupFlow()
const category = new CategoriesObjects()

describe("[TEST CASE 19]View Category Products",()=>{

    before(function() {
        cy.visit('/')
    })

    it("[TEST CASE 19]View Category Products",()=>{
        cy.verifyHomeUrl()
        signup.clickTopNavBTN('Products')
        product.verifyBrandsVisibleOnLeftSidebar()
        product.clickPoloSubCategory()
        product.verifyBrandPage()
    })
})