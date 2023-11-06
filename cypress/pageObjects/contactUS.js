import CredentialsGenerator from "../fixtures/credentialsGenerator"
const credentials = new CredentialsGenerator()

export default class ContactUs{

    verifyGetInTouchIsVisible(){
        cy.get("[class='contact-form']").find('h2').should("be.visible")
            .contains("Get In Touch")
        return this
    }

    insertName(){
        cy.get("[data-qa='name'").type(credentials.user().firstName)
    }

    insertEmail(){
        cy.get("[data-qa='email'").type(credentials.user().email)
    }

    insertSubject(){
        cy.get("[data-qa='subject'").type(credentials.user().sentence)
    }

    insertMessage(){
        cy.get("[data-qa='message'").type(credentials.user().paragraph)
    }

    selectFile(){
        cy.fixture('example.json', { encoding: null }).as('myFixture')
        cy.get('input[type=file]').selectFile('@myFixture')
        return this
    }

    clickSubmitBTN(){
        cy.get("[data-qa='submit-button'").click()
    }

    verifySuccessMessage(){
        cy.get("[class='status alert alert-success']").should('contain', 'Success! Your details have been submitted successfully.').and("be.visible")
    }

    verifyHomePage(){
        cy.get("[class='fa fa-angle-double-left']").click()
        cy.url().should('eq', Cypress.config().baseUrl)
    }
}