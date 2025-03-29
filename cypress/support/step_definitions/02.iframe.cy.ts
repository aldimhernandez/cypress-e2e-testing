import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "cypress/pages/form/HomePage";
import { alertsWindowsPage, iframePage } from "cypress/pages/form/IframePage";
import { navBarPage } from "cypress/pages/form/NavBarPage";

When('I click on the "Alerts, Frame & Windows" menu', () => {
    homePage.navigateToIframeSection();
});

When('I click on the "Frames" option', () => {
    alertsWindowsPage.pageRedirectValidation();
    navBarPage.navigateToFrameSection();
});

Then('I should see the text "This is a sample page" inside the iframe', () => {
    iframePage.pageRedirectValidation();
    iframePage.validateIframeText();
});
