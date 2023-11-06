import CredentialsGenerator from "../fixtures/credentialsGenerator"
const credentials = new CredentialsGenerator()

export default class HomeObjects{
    verifySubscriptionIsVisible(){
        cy.get("[class='single-widget']").find('h2').should("be.visible")
            .contains("Subscription")
        return this
    }

    insertEmail(){
        cy.get("[id='susbscribe_email']").type(credentials.user().email)
        cy.get("[id='subscribe']").click()
    }

    leaveEmailBlank(){
        cy.get("[id='susbscribe_email']").clear()
        cy.get("[id='subscribe']").click()
    }

    verifySubscriptionSuccess(){
        cy.get("[id='success-subscribe']", { timeout: 10000 }).should('contain', 'You have been successfully subscribed!').and('be.visible');
    }

    verifyErrorMessage(){
        cy.get("[id='success-subscribe']", { timeout: 10000 }).should('contain', 'You have been successfully subscribed!').and('not.be.visible');
    }
    
}