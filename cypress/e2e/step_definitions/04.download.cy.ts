import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

//TODO: Refactor to POM
When('I navigate to the "Elements" section', () => {
    cy.contains("Elements").click();
});

When('I click on the "Upload and Download" section', () => {
    cy.contains("Upload and Download").click();

});

When('I click on the "Download" button', () => {
    cy.get("#downloadButton").click();
});

Then('The file should be downloaded successfully', () => {
    cy.readFile("cypress/downloads/sampleFile.jpeg").should("exist");
});
