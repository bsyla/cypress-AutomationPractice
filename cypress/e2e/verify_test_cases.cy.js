import SignupFlow from '../pageObjects/signupFlow';

const signup = new SignupFlow()

describe("[TEST CASE 7]Verify Test Cases",()=>{

    before(function() {
        cy.visit('/')
    })

    it("Verify Test Cases Page",()=>{
        cy.verifyHomeUrl()
        signup.clickTopNavBTN('Test Cases')
        cy.url().should('eq', Cypress.config().baseUrl + 'test_cases')
    })
})

