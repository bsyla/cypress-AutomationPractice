import CategoriesObjects from "../pageObjects/categoriesObjects"
const categories = new CategoriesObjects()

describe("[TEST CASE 18]View Category Products",()=>{

    before(function() {
        cy.visit('/')
    })

    it("[TEST CASE 18]View Category Products",()=>{
        cy.verifyHomeUrl()
        categories.verifyCategoriesVisibleOnLeftSidebar()
        categories.clickWomenCategory()
        categories.clickDressSubCategory()
        categories.verifyCategoryPage(1)
        categories.verifyDressProductsIsVisible()
        categories.clickMenCategory()
        categories.clickJeansSubCategory()
        categories.verifyCategoryPage(6)
    })
})