import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../pages/form/HomePage";
import { formPage, practiceFormPage } from "../../pages/form/FormPage";
import { navBarPage } from "cypress/pages/form/NavBarPage";

//* Background
When('I navigate to the form section', () => {
    homePage.navigateToFormSection();
});

When('I click on the practice form button', () => {
    formPage.pageRedirectValidation();
    navBarPage.navigateToPracticeForm();
});

Then('I see the empty form', () => {
    practiceFormPage.pageRedirectValidation();
});

//* Scenario: Fill out the form with valid data
When('I enter my personal details {string} {string} {string}', (name: string, lastName: string, email: string) => {
    practiceFormPage.fillForm(name, lastName, email);
});

When('I choose {string} as my gender', (gender: string) => {
    practiceFormPage.selectGender(gender);
});

When('I enter {} as my mobile number', (mobile: number) => {
    practiceFormPage.enterMobileNumber(mobile);
});

When('I enter {string} as my date of birth', (dob: string) => {
    practiceFormPage.enterDateOfBirth(dob);
});

When('I fill out the subject field {string}', (subject: string) => {
    practiceFormPage.fillOutSubjectField(subject);
});

When('I select the hobbies field {string}', (hobbies: string) => {
    practiceFormPage.selectHobbies(hobbies);
});

When('I upload the picture file {string}', (picture: string) => {
    practiceFormPage.uploadPicture(picture);
});

When('I fill out the current address field {string}', (address: string) => {
    practiceFormPage.fillOutCurrentAddress(address);
});

When('I select {string} and {string}', (state: string, city: string) => {
    practiceFormPage.selectStateAndCity(state, city);
});

When('I click on the submit button', () => {
    practiceFormPage.submitForm();
});

Then('I should see the form submission message', () => {
    practiceFormPage.formSubmissionValidation();
});

//* Scenario: Fill out the form with invalid data
When('I leave the gender field empty', () => { });

Then('I should see the form error message', () => {
    practiceFormPage.formErrorMessageValidation();
});