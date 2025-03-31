import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { bookStorePage } from "cypress/pages/03.register/BookStorePage";
import { loginPage } from "cypress/pages/03.register/LoginPage";
import { registerPage } from "cypress/pages/03.register/RegisterPage";
import { homePage } from "cypress/pages/0A.home/HomePage";
import { navBarPage } from "cypress/pages/0B.navbar/NavBarPage";

//* Background
When('I navigate to the Book Store section', () => {
    homePage.navigateToBookStore();
});

When('I click on the Login section', () => {
    bookStorePage.pageRedirectValidation();
    navBarPage.navigateToLoginSection();
});

When('I click on the "New User" button', () => {
    loginPage.pageRedirectValidation();
    loginPage.clickNewUserButton();
});

Then('I should see the empty registration form', () => {
    registerPage.pageRedirectValidation();
    registerPage.checkEmptyRegistrationForm();
});

//* Scenario: Successful registration with valid details
When('I enter a valid {string}, {string}, {string}, {string}', (firstName: string, lastName: string, username: string, password: string) => {
    registerPage.fillForm(firstName, lastName, username, password);
});

When('I click on reCaptcha', () => {
    registerPage.clickReCaptcha();
});

When('I click on the register button', () => {
    registerPage.clickRegister();
});

Then('I should see a success message saying "Registration successful."', () => {
    registerPage.registrationSuccessfulValidation();
});

