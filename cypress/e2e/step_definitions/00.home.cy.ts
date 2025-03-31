import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "cypress/pages/0A.home/HomePage";

Given('I visit the demoqa site', () => {
    homePage.visit();
});

When("I am on the main page", () => {
    homePage.pageRedirectValidation();
});