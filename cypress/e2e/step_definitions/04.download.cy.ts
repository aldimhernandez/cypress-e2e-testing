import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { uploadAndDownloadPage } from "cypress/pages/04.download/UploadAndDownloadPage";
import { homePage } from "cypress/pages/0A.home/HomePage";
import { navBarPage } from "cypress/pages/0B.navbar/NavBarPage";

When('I navigate to the "Elements" section', () => {
    homePage.navigateToElementsSection();
});

When('I click on the "Upload and Download" section', () => {
    navBarPage.navigateToUploadAndDownloadSection();
});

When('I click on the "Download" button', () => {
    uploadAndDownloadPage.pageRedirectValidation();
    uploadAndDownloadPage.clickDownloadButton();
});

Then('The file should be downloaded successfully', () => {
    uploadAndDownloadPage.downloadFileValidation();
});
