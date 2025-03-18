export default class BasePage {
    private readonly title: string;
    private readonly url: string;
    private readonly h1?: string;

    constructor(title: string, url: string, h1?: string) {
        this.title = title;
        this.url = url;
        this.h1 = h1;
    }

    //* Actions
    visit() {
        cy.visit(this.url);
    }

    clickElementByText(text: string): void;
    clickElementByText(text: string, selector: string): void;
    clickElementByText(text: string, selector?: string): void {
        selector ?
            cy.contains(selector, text).should('exist').and('be.visible').click() :
            cy.contains(text).should('exist').and('be.visible').click();
    }

    //* Validations
    validateTitle() {
        cy.title().should('eq', this.title);
    }

    validateUrl() {
        cy.url().should('eq', this.url);
    }

    validateH1() {
        cy.get('h1').should('have.text', this.h1).and('be.visible');
    }

    validateContainsText(text: string): void;
    validateContainsText(text: string, selector: string): void;
    validateContainsText(text: string, selector?: string): void {
        selector ?
            cy.contains(selector, text).should('exist').and('be.visible') :
            cy.contains(text).should('exist').and('be.visible');
    }
}
