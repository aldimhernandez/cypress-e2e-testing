import BasePage from "../BasePage";
import { IPage } from "../IPage";

class BookStorePage extends BasePage implements IPage {
    readonly title: string = 'DEMOQA';
    readonly url: string = `${Cypress.config().baseUrl}/books`;

    pageRedirectValidation() {
        this.validateTitle(this.title);
        this.validateUrl(this.url);
    }
}

export const bookStorePage = new BookStorePage();