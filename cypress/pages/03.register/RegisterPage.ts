import { accountUserService } from "cypress/services/03.register/account_user.svc";
import BasePage from "../BasePage";
import { IPage } from "../IPage";

class RegisterPage extends BasePage implements IPage {
    readonly title: string = 'DEMOQA';
    readonly url: string = `${Cypress.config().baseUrl}/register`;
    readonly h1: string = 'Register';

    readonly firstNameSelector = '#firstname';
    readonly lastNameSelector = '#lastname';
    readonly usernameSelector = '#userName';
    readonly passwordSelector = '#password';


    private readonly registerFormSelector = '#userForm';
    private readonly registerTitleSelector = 'h4';
    private readonly registerCaptchaIframeAttr = 'title="reCAPTCHA"';
    private readonly registerCaptchaCheckboxSelector = '.recaptcha-checkbox-spinner-overlay';
    private readonly registerButtonSelector = '#register';

    pageRedirectValidation(): void {
        this.validateTitle(this.title);
        this.validateUrl(this.url);
        this.validateH1(this.h1);
    }

    checkEmptyRegistrationForm() {
        cy.get(this.registerFormSelector).within(() => {
            this.validateContainsText(RegisterPage.REGISTER_TITLE_TEXT, this.registerTitleSelector);
            cy.get('input').should('have.length', 4).and('be.empty');
        })
    }

    fillForm(firstName: string, lastName: string, username: string, password: string) {
        this.typeText(firstName, this.firstNameSelector);
        this.typeText(lastName, this.lastNameSelector);
        this.typeText(username, this.usernameSelector);
        this.typeText(password, this.passwordSelector);
    }

    clickReCaptcha() {
        cy.getIframeByAttr(this.registerCaptchaIframeAttr)
            .find(this.registerCaptchaCheckboxSelector)
            .click({ force: true })
            .should('have.attr', 'style', 'animation-play-state: running;')
    }

    clickRegister() {
        this.clickElementByText(RegisterPage.REGISTER_BUTTON_TEXT, this.registerButtonSelector);
        accountUserService.waitAndSave();
        accountUserService.responseValidation();
    }

    registrationSuccessfulValidation() {
        //Servicio
        //Alert
    }

    static readonly REGISTER_TITLE_TEXT = 'Register to Book Store';
    static readonly REGISTER_BUTTON_TEXT = 'Register';
}

export const registerPage = new RegisterPage();