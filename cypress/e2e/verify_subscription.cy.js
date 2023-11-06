import SignupFlow from "../pageObjects/signupFlow"
import HomeObjects from "../pageObjects/homeObjects"
const signup = new SignupFlow()
const home = new HomeObjects()

describe("[Test 10] Verify Subscription in Home Page",()=>{

    beforeEach(function() {
        cy.visit('/')
    })

    it("[Test 10] Verify Subscription in Home Page",()=>{
        cy.verifyHomeUrl()
        cy.scrollTo('bottom')
        home.verifySubscriptionIsVisible()
        home.insertEmail()
        home.verifySubscriptionSuccess()
    })

    it("[Negative Scenario 1] Leave Subscription Blank",()=>{
        cy.verifyHomeUrl()
        cy.scrollTo('bottom')
        home.verifySubscriptionIsVisible()
        home.leaveEmailBlank()
        home.verifyErrorMessage()
    })

    it("[Test 11] Verify Subscription in Cart Page",()=>{
        cy.verifyHomeUrl()
        signup.clickTopNavBTN('Cart')
        cy.scrollTo('bottom')
        home.verifySubscriptionIsVisible()
        home.insertEmail()
        home.verifySubscriptionSuccess()
    })
})