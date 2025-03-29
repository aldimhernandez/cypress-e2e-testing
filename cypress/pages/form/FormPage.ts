import BasePage from "../BasePage";
import { IPage } from "../IPage";

class FormPage extends BasePage implements IPage {

    readonly title: string = 'DEMOQA';
    readonly url: string = `${Cypress.config().baseUrl}/forms`;
    readonly elementListSelector: string = '.element-list';

    pageRedirectValidation() {
        formPage.validateTitle(this.title);
        formPage.validateUrl(this.url);
        this.validateContainsText(BasePage.SUBTITLE_TEXT);
    }
}

export const formPage = new FormPage();

class PracticeFormPage extends BasePage implements IPage {

    readonly title: string = 'DEMOQA';
    readonly url: string = `${Cypress.config().baseUrl}/automation-practice-form`;
    readonly h1: string = 'Practice Form';

    private readonly formSelector: string = 'form';
    private readonly modalHeaderSelector: string = '.modal-header';
    private readonly firstNameSelector: string = '#firstName';
    private readonly lastNameSelector: string = '#lastName';
    private readonly emailSelector: string = '#userEmail';
    private readonly genderSelector: string = '[id^=gender-radio-]';
    private readonly mobileNumberSelector: string = '#userNumber';
    private readonly dateOfBirthSelector: string = '#dateOfBirthInput';
    private readonly subjectsSelector: string = '#subjectsInput';
    private readonly hobbiesSelector: string = '[id^=hobbies-checkbox-]';
    private readonly currentAddressSelector: string = '#currentAddress';
    private readonly stateSelector: string = '#state';
    private readonly citySelector: string = '#city';
    private readonly submitButtonSelector: string = '#submit';

    //* Validation
    emptyFormValidation() {
        cy.get(this.formSelector).within(() => {
            cy.get('input').should('have.length', 15).and('be.empty');
        });
    }

    pageRedirectValidation() {
        practiceFormPage.validateTitle(this.title);
        practiceFormPage.validateUrl(this.url);
        practiceFormPage.validateH1(this.h1);
        this.validateContainsText(PracticeFormPage.STUDENT_REGISTRATION_FORM_TEXT, 'h5');
        this.emptyFormValidation();
    }

    formSubmissionValidation() {
        this.validateContainsText(PracticeFormPage.SUBMISSION_SUCCESS_TEXT, this.modalHeaderSelector);
    }

    formErrorMessageValidation() {
        cy.get('#userEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.contains('Thanks for submitting the form').should('not.exist');
    }

    //* Actions
    fillForm(name: string, lastName: string, email: string) {
        this.typeText(name, this.firstNameSelector);
        this.typeText(lastName, this.lastNameSelector);
        this.typeText(email, this.emailSelector);
    }

    selectGender(gender: string) {
        cy.get(this.genderSelector).next('label').contains(gender).click();
    }

    enterMobileNumber(mobile: number) {
        cy.get(this.mobileNumberSelector).type(mobile.toString());
    }

    enterDateOfBirth(dob: string) {
        cy.get(this.dateOfBirthSelector).click().type(`{selectall}${dob}{enter}`);
    }

    fillOutSubjectField(subject: string) {
        cy.get(this.subjectsSelector).type(subject).type('{enter}');
    }

    selectHobbies(hobbies: string) {
        const hobbiesArray = hobbies.split(',').map(h => h.trim()); // Convierte el string en array
        hobbiesArray.forEach((hobby: string) => {
            cy.get(this.hobbiesSelector).next('label').contains(hobby).click();
        });
    }

    uploadPicture(picture: string) {
        //TODO: Implementar la subida de archivos
    }

    fillOutCurrentAddress(address: string) {
        this.typeText(address, this.currentAddressSelector);
    }

    selectState(state: string) {
        cy.get(this.stateSelector).type(`${state}{enter}`);
    }

    selectCity(city: string) {
        cy.get(this.citySelector).type(`${city}{enter}`);
    }

    selectStateAndCity(state: string, city: string) {
        this.selectState(state);
        this.selectCity(city);
    }

    submitForm() {
        this.clickElementByText(PracticeFormPage.SUBMIT_BUTTON_TEXT, this.submitButtonSelector);
    }

    static readonly STUDENT_REGISTRATION_FORM_TEXT = 'Student Registration Form';
    static readonly SUBMISSION_SUCCESS_TEXT = 'Thanks for submitting the form';
    static readonly SUBMIT_BUTTON_TEXT = 'Submit';
}

export const practiceFormPage = new PracticeFormPage();
