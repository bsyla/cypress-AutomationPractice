import ContactUs from "../pageObjects/contactUS";
import SignupFlow from "../pageObjects/signupFlow";
const contact = new ContactUs()
const signup = new SignupFlow

describe("[Test 6] Contact Us Form",()=>{

    before(function() {
        cy.visit('/')
    })

    it("[Test 6]Contact Us Form", ()=>{
        cy.verifyHomeUrl()
        signup.clickTopNavBTN('Contact us')
        contact.verifyGetInTouchIsVisible()
        contact.insertName()
        contact.insertEmail()
        contact.insertSubject()
        contact.insertMessage()
        contact.selectFile()
        contact.clickSubmitBTN()
        contact.verifySuccessMessage()
        contact.verifyHomePage()
    })
})