import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

//* Background
Given('I visit the demoqa site', () => {
    cy.visit('https://demoqa.com/');
});

When('I navigate to the form section', () => {
    cy.contains('[class="card mt-4 top-card"]', 'Forms').should('be.visible').click();
});

When('I click on the practice form button', () => {
    cy.url().should('eq', 'https://demoqa.com/forms');
    cy.contains('Please select an item from left to start practice.').should('be.visible');
    cy.contains('.element-list', 'Practice Form').should('be.visible').click();
});

Then('I see the empty form', () => {
    cy.url().should('eq', 'https://demoqa.com/automation-practice-form');
    cy.get('h1').should('have.text', 'Practice Form').and('be.visible');
    cy.get('h5').should('have.text', 'Student Registration Form').and('be.visible');
    cy.get('form').within(() => {
        cy.get('input').should('have.length', 15).and('be.empty');
    });
});

//* Scenario: Fill out the form with valid data
When('I enter my personal details {string} {string} {string}', (name: string, lastName: string, email: string) => {
    cy.get('#firstName').type(name);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
});

When('I choose {string} as my gender', (gender: string) => {
    cy.get('[id^=gender-radio-]').next('label').contains(gender).click();
});

When('I enter {} as my mobile number', (mobile: number) => {
    cy.get('#userNumber').type(mobile.toString());
});

When('I enter {string} as my date of birth', (dob: string) => {
    cy.get('#dateOfBirthInput').click().type(`{selectall}${dob}{enter}`);
});

When('I fill out the subject field {string}', (subject: string) => {
    cy.get('#subjectsInput').type(subject).type('{enter}');
});

When('I select the hobbies field {string}', (hobbies: string) => {
    const hobbiesArray = hobbies.split(',').map(h => h.trim()); // Convierte el string en array
    hobbiesArray.forEach((hobby: string) => {
        cy.get('[id^=hobbies-checkbox-]').next('label').contains(hobby).click();
    });
});

When('I upload the picture file {string}', (picture) => {

});

When('I fill out the current address field {string}', (address: string) => {
    cy.get('#currentAddress').type(address);
});

When('I select {string} and {string}', (state: string, city: string) => {
    cy.get('#state').type(`${state}{enter}`);
    cy.get('#city').type(`${city}{enter}`);
});

When('I click on the submit button', () => {
    cy.get('#submit').click();
});

Then('I should see the form submission message', () => {
    cy.get('.modal-header').should('have.text', 'Thanks for submitting the form').and('be.visible');
});

//* Scenario: Fill out the form with invalid data
When('I leave the gender field empty', () => { });

Then('I should see the form error message', () => {
    cy.get('#userEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.contains('Thanks for submitting the form').should('not.exist');
});