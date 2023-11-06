export default class ProductObjects{

    verifyBrandsVisibleOnLeftSidebar(){
        cy.get("[class='brands_products']").should("be.visible")
    }

    clickPoloSubCategory(){
        cy.get("[class='brands-name']").contains('Polo').click()
    }

    verifyBrandPage(){
        cy.url().should('eq', Cypress.config().baseUrl + 'brand_products/'+ 'Polo')
    }

}
