import { IPage } from "./IPage";

// filepath: c:\Users\Aldi\Desktop\cypress-e2e-testing\cypress\pages\BasePage.ts
export default class BasePage {
    //* Actions
    visit(this: IPage) {
        cy.visit(this.url);
    }

    clickElementByText(text: string): void;
    clickElementByText(text: string, selector: string): void;
    clickElementByText(text: string, selector?: string): void {
        selector ?
            cy.contains(selector, text).should('exist').and('be.visible').click() :
            cy.contains(text).should('exist').and('be.visible').click();
    }

    typeText(text: string, selector: string): void {
        cy.get(selector).type(text);
    }

    //* Validations
    validateTitle(expectedTitle: string) {
        cy.title().should('eq', expectedTitle);
    }

    validateUrl(expectedUrl: string) {
        cy.url().should('eq', expectedUrl);
    }

    validateH1(expectedH1: string) {
        cy.get('h1').should('have.text', expectedH1).and('be.visible');
    }

    validateContainsText(text: string): void;
    validateContainsText(text: string, selector: string): void;
    validateContainsText(text: string, selector?: string): void {
        selector ?
            cy.contains(selector, text).should('exist').and('be.visible') :
            cy.contains(text).should('exist').and('be.visible');
    }

    static readonly SUBTITLE_TEXT: string = 'Please select an item from left to start practice.';
}