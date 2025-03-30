import BasePage from "../BasePage";
import { IPage } from "../IPage";

class AlertsWindowsPage extends BasePage implements IPage {

    readonly title: string = 'DEMOQA';
    readonly url: string = `${Cypress.config().baseUrl}/alertsWindows`;

    pageRedirectValidation() {
        this.validateTitle(this.title);
        this.validateUrl(this.url);
        this.validateContainsText(BasePage.SUBTITLE_TEXT);
    }
}

export const alertsWindowsPage = new AlertsWindowsPage();

class IframePage extends BasePage implements IPage {
    readonly title: string = 'DEMOQA';
    readonly url: string = `${Cypress.config().baseUrl}/frames`;

    pageRedirectValidation() {
        this.validateTitle(this.title);
        this.validateUrl(this.url);
    }

    validateIframeText() {
        cy.getIframe1Body().find('h1').should('have.text', 'This is a sample page');
    }
}

export const iframePage = new IframePage();