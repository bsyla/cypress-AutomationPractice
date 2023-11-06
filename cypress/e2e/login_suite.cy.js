import SignupFlow from '../pageObjects/signupFlow';
import example from '../fixtures/example.json'

const signup = new SignupFlow();

describe("[TEST CASES 1-5]Register User Test Suite", ()=>{

    before(function(){
        //access fixture data
        cy.fixture('example').then((example)=>{
           this.example=example
        })
     })//importing the json content within the fixture file and creating object for accessing

    beforeEach(function(){
        cy.visit('/') //Launch Browser & navigate to url 'http://automationexercise.com'
    })

    after("Delete Created User", ()=> {
        signup.clickTopNavBTN('Delete Account') //Click 'Delete Account' button
        
        signup.accountDeletedIsVisible()//Verify that 'ACCOUNT DELETED!' is visible

        signup.continueBTN()//click 'Continue' button
    })


 //-------------------------------------------------------------------------------------------------------

    it("Negative Scenario 2[Leave Email SignUp Field Blank]", ()=>{
        cy.verifyHomeUrl()//This is a command registered under commands.js to verify that the current url is the one of the baseURL
        signup.clickSignupOrLoginBTN()//Click on 'Signup / Login' button

        signup.verifyNewUserSignupIsVisible() //Verify 'New User Signup!' is visible

        signup.insertName()//Insert Generated name
        signup.getSignUpEmailPlaceholder().clear()//Make sure that the email field is blank
        signup.clickSignUPBtn() // Click 'Signup' button
        signup.verifyErrorMessageForBlank()//Verify that the pop appears and it's message
    })

    it("Negative Scenario 3 [Insert non-email input in the Email SignUp field]", ()=>{
        cy.verifyHomeUrl()
        signup.clickSignupOrLoginBTN()//Click on 'Signup / Login' button

        signup.verifyNewUserSignupIsVisible() //Verify 'New User Signup!' is visible

        signup.insertName()//Insert Generated name
        signup.getSignUpEmailPlaceholder().type('notanemail')//Type down not an email
        signup.clickSignUPBtn() // Click 'Signup' button
        signup.verifyErrorMessageForNotEmail()//Verify that the pop appears and it's message
    })
//-------------------------------------------------------------------------------------------------------
    it("[TEST CASE 1 & 4]]Register User AND LOGOUT USER", ()=> {
        
        cy.verifyHomeUrl()

        signup.clickSignupOrLoginBTN()//Click on 'Signup / Login' button

        signup.verifyNewUserSignupIsVisible()//Verify 'New User Signup!' is visible
        

        const firstName = signup.insertName()//Enter name(Randomly generated)
        example.name=firstName//associating the generated name to the fixture 
        const eMail = signup.insertEmail()//Enter email(Randomly generated)
        example.email = eMail//associating the generated email address to the fixture 

        signup.clickSignUPBtn() // Click 'Signup' button

        signup.getPlaceHolder()//Verify that 'ENTER ACCOUNT INFORMATION' is visible

        signup.getTitle()//I have selected the first option in the gender checkbox and selected the
            
        const passWord = signup.getPassword()//Generator for the password 
        example.pass = passWord//associating the generated password to the fixture
        signup.getDay()
        signup.getMonth()
        signup.getYear()
        //Fill details: Title, Name, Email, Password, Date of birth
        //18th array position so the user will always be 18

        signup.getNewsletter() //Select checkbox 'Sign up for our newsletter!'
        signup.getSpecialOffers() //Select checkbox 'Receive special offers from our partners!'

        signup.insertFirstName().type(firstName)//Typing the same name generated above
        signup.insertLastName()
        signup.insertFullAddress()
        signup.insertFullAddress2()
        signup.selectCountry()
        signup.insertState()
        signup.insertCity()
        signup.insertZip()
        signup.insertNumber()
        //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number

        signup.clickCreateAccountBTN()//Click 'Create Account button'

        signup.accountCreatedIsVisible()//Verify that 'ACCOUNT CREATED!' is visible

        signup.continueBTN()//Click 'Continue' button

        signup.verifyLoggedInUsername(firstName) //Verify that 'Logged in as username' is visible

        signup.clickTopNavBTN('Logout')//This is a function created to search the top nav element for
                                        //the phrase we pass as an argument
    })

    it("[TEST CASE 5]Register User with existing email",() => {
        cy.verifyHomeUrl()
        signup.clickSignupOrLoginBTN()//Click on 'Signup / Login' button

        signup.verifyNewUserSignupIsVisible() //Verify 'New User Signup!' is visible

        signup.insertName()
        signup.getSignUpEmailPlaceholder().type(example.email)
        signup.clickSignUPBtn() // Click 'Signup' button

        signup.verifySignUPErrorMessage()//Verify that the error message appears and it's content
    })

//-------------------------------------------------------------------------------------------------------

    it("Negative Scenario 4[Leave Email Login Field Blank]", ()=>{
        cy.verifyHomeUrl()//This is a command registered under commands.js to verify that the current url is the one of the baseURL
        signup.clickSignupOrLoginBTN()//Click on 'Signup / Login' button

        signup.verifyLoginToYourAccountIsVisible() //Verify 'New User Signup!' is visible

        signup.getLoginEmailPlaceHolder()//Make sure that the email field is blank
        signup.insertLoginPassword(example.pass)
        signup.clickLoginBTN()//Click the 'Login' button
        signup.verifyErrorMessageForBlankLogin()//Verify that the pop appears and it's message
    })



    it("[TEST CASE 2 & 3]LoginUSER WITH INCORRECT/CORRECT EMAIL AND PASSWORD",()=> {
        cy.verifyHomeUrl()
        signup.clickSignupOrLoginBTN()

        signup.verifyLoginToYourAccountIsVisible()//Verify 'Login To Your Account' is visible

        signup.insertLoginEmail('incorrect@incorrect.com')//Enter incorrect email
        signup.insertLoginPassword('incorrect')//Enter incorrect password
        signup.clickLoginBTN()//Click the 'Login' button

        signup.verifyErrorMessage()//Verify that the error message appears and it's content

        

        signup.insertLoginEmail(example.email) //due to this being a test which is out of scope of the variable we're looking for, we're using fixtures to retrieve it
        signup.insertLoginPassword(example.pass)//same thing
        signup.clickLoginBTN()//Click the 'Login' button

        signup.verifyLoggedInUsername(example.name) //Verify that 'Logged in as username' is visible
    })

})