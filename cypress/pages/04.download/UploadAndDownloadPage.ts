import BasePage from "../BasePage";
import { IPage } from "../IPage";

class UploadAndDownloadPage extends BasePage implements IPage {
    readonly title: string = 'DEMOQA';
    readonly url: string = `${Cypress.config().baseUrl}/upload-download`;
    readonly h1: string = 'Upload and Download';

    private readonly downloadButtonSelector = '#downloadButton';
    private readonly uploadButtonSelector = '#uploadFile';
    private readonly uploadFilePath = 'cypress/downloads/sampleFile.jpeg';

    pageRedirectValidation() {
        this.validateTitle(this.title);
        this.validateUrl(this.url);
        this.validateH1(this.h1);
    }

    clickDownloadButton() {
        this.clickElementByText(UploadAndDownloadPage.DOWNLOAD_BUTTON_TEXT, this.downloadButtonSelector);
    }

    clickUploadButton() {
        this.clickElementByText(UploadAndDownloadPage.UPLOAD_BUTTON_TEXT, this.uploadButtonSelector);
    }

    downloadFileValidation() {
        cy.readFile(this.uploadFilePath).should("exist");
    }

    static readonly DOWNLOAD_BUTTON_TEXT: string = 'Download';
    static readonly UPLOAD_BUTTON_TEXT: string = 'Upload';
}

export const uploadAndDownloadPage = new UploadAndDownloadPage();