export default class CategoriesObjects{

    verifyCategoriesVisibleOnLeftSidebar(){
        cy.get("[class='left-sidebar']").should("be.visible")
    }

    clickWomenCategory(){
        cy.get("a[href='#Women']").click()
    }

    clickDressSubCategory(){
        cy.get("[class='panel-body']").contains('Dress').debug().click({force:true})
    }

    verifyCategoryPage(a){
        cy.url().should('eq', Cypress.config().baseUrl + 'category_products/'+ a)
    }

    verifyDressProductsIsVisible(){
        cy.get("[class='title text-center']").should("be.visible")
            .contains("Women - Dress Products")
        return this
    }

    clickMenCategory(){
        cy.get("a[href='#Men']").click()
    }

    clickJeansSubCategory(){
        cy.get("[class='panel-body']").contains('Jeans ').click({force:true})
    }
}