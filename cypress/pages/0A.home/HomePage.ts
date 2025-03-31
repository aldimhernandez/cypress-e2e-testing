import BasePage from "../BasePage";
import { IPage } from "../IPage";

class HomePage extends BasePage implements IPage {
    readonly title: string = 'DEMOQA';
    readonly url: string = `${Cypress.config().baseUrl}/`;

    private readonly cardSectionSelector: string = '[class="card mt-4 top-card"]';

    pageRedirectValidation() {
        homePage.validateTitle(this.title);
        homePage.validateUrl(this.url);
        cy.get('header > a > img').should('have.attr', 'src', '/images/Toolsqa.jpg');
    }

    navigateToFormSection() {
        this.clickElementByText(HomePage.FORM_CARD_TEXT, this.cardSectionSelector);
    }

    navigateToIframeSection() {
        this.clickElementByText(HomePage.ALERTS_FRAMES_WINDOWS_CARD_TEXT, this.cardSectionSelector);
    }

    navigateToBookStore() {
        this.clickElementByText(HomePage.BOOK_STORE_TEXT, this.cardSectionSelector);
    }

    static readonly FORM_CARD_TEXT: string = 'Forms';
    static readonly ALERTS_FRAMES_WINDOWS_CARD_TEXT: string = 'Alerts, Frame & Windows';
    static readonly BOOK_STORE_TEXT: string = 'Book Store Application';
}

export const homePage = new HomePage();