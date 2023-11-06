import CredentialsGenerator from '../fixtures/credentialsGenerator'
const credentials = new CredentialsGenerator();

export default class SignupFlow{

    clickSignupOrLoginBTN(){
        cy.get("[class='fa fa-lock']").should("be.visible").click()
        return this
    }

    verifyNewUserSignupIsVisible(){
        cy.get("[class='signup-form']").find('h2').should("be.visible")
            .contains("New User Signup!")
        return this
    }

    insertName(){
        const generatedName = credentials.user().firstName 
        cy.get("[data-qa='signup-name']").type(generatedName)
        return generatedName
    }

    insertEmail(){
        const generatedEmail = credentials.user().email 
        cy.get("[data-qa='signup-email']").type(generatedEmail)
        return generatedEmail
    }

    getSignUpEmailPlaceholder(){
        return cy.get("[data-qa='signup-email']")
    }

    clickSignUPBtn(){
        cy.get("[data-qa='signup-button']").click()
    }

    getPlaceHolder(){
        return cy.get("[class='login-form']").find('h2').should("be.visible")
    }

    getTitle(){
        return cy.get("[id='id_gender1']").check()
    }

    getPassword(){
        const generatedPassword = credentials.user().password
        cy.get("[data-qa='password']").type(generatedPassword)
        return generatedPassword
    }

    getDay(){
        return cy.get("[data-qa='days']").select([28])
    }

    getMonth(){
        return cy.get("[data-qa='months']").select([12])
    }

    getYear(){
        return cy.get("[data-qa='years']").select([19]) 
    }

    getNewsletter(){
        return cy.get("[id='newsletter']").check()
    }

    getSpecialOffers(){
        return cy.get("[id='optin']").check()
    }

    insertFirstName(){
        return cy.get("[data-qa='first_name']")
    }

    insertLastName(){
        return cy.get("[data-qa='last_name']").type(credentials.user().lastName)
    }

    insertFullAddress(){
        return cy.get("[data-qa='address']").type(credentials.user().fullAddress)
    }

    insertFullAddress2(){
        return cy.get("[data-qa='address2']").type(credentials.user().fullAddress)
    }

    selectCountry(){
        return cy.get("[data-qa='country']").select([1])
    }

    insertState(){
        return cy.get("[data-qa='state']").type(credentials.user().state)
    }

    insertCity(){
        return cy.get("[data-qa='city']").type(credentials.user().city)
    }

    insertZip(){
        return cy.get("[data-qa='zipcode']").type(credentials.user().zip)
    }

    insertNumber(){
        return cy.get("[data-qa='mobile_number']").type(credentials.user().number)
    }

    clickCreateAccountBTN(){
        return cy.get("[data-qa='create-account']").click()
    }

    accountCreatedIsVisible(){
        return cy.get("[data-qa='account-created']").contains("Account Created!").should("be.visible")
    }

    continueBTN(){
        return cy.get("[data-qa='continue-button']").click()
    }
    getTopNav(){
        return cy.get("[class='nav navbar-nav']")
    }

    clickTopNavBTN(element){
        this.getTopNav().each(($ele)=> {
            cy.wrap($ele).find('a').contains(element).click()
        })
    }

    verifyLoggedInUsername(a){
        this.getTopNav().each(($ele)=> {
            cy.wrap($ele).find('a').should('contain', 'Logged in as ' + a).and("be.visible")
        })
    }

    accountDeletedIsVisible(){
        return cy.get("[data-qa='account-deleted']").contains("Account Deleted!").should("be.visible")
    }

    verifyLoginToYourAccountIsVisible(){
        cy.get("[class='login-form']").find('h2').should("be.visible")
            .contains("Login to your account")
        return this
    }

    insertLoginEmail(a){
        cy.get("[data-qa='login-email']").clear().type(a)
    }

    getLoginEmailPlaceHolder(){
        cy.get("[data-qa='login-email']").clear()
    }

    insertLoginPassword(a){
        cy.get("[data-qa='login-password']").clear().type(a)
    }

    clickLoginBTN(){
        return cy.get("[data-qa='login-button']").click()
    }

    verifyErrorMessage(){
        return cy.get("[class='login-form']").find('p')
        .should('contain', 'Your email or password is incorrect!')
    }

    verifySignUPErrorMessage(){
        return cy.get("[class='signup-form']").find('p')
        .should('contain', 'Email Address already exist!')
    }

    verifyErrorMessageForBlank(){
        cy.get("[class='signup-form']").find('form').within(() => {
            cy.get("[type='email']").invoke('prop', 'validationMessage')
                .should('equal', 'Please fill in this field.')
          })
    }

    verifyErrorMessageForNotEmail(){
        cy.get("[class='signup-form']").find('form').within(() => {
            cy.get("[type='email']").invoke('prop', 'validationMessage')
                .should('equal', 'Please include an \'@\' in the email address. \'notanemail\' is missing an \'@\'.')
          })
    }

    verifyErrorMessageForBlankLogin(){
        cy.get("[class='login-form']").find('form').within(() => {
            cy.get("[type='email']").invoke('prop', 'validationMessage')
                .should('equal', 'Please fill in this field.')
          })
    }
}

