import { accountUserService } from "cypress/services/03.register/account_user.svc";
import BasePage from "../BasePage";
import { IPage } from "../IPage";

class LoginPage extends BasePage implements IPage {

    readonly title: string = 'DEMOQA';
    readonly url: string = `${Cypress.config().baseUrl}/login`;
    readonly h1: string = 'Login';

    private readonly newUserSelector = '#newUser';

    pageRedirectValidation() {
        this.validateTitle(this.title);
        this.validateUrl(this.url);
        this.validateH1(this.h1);
    }

    clickNewUserButton() {
        this.clickElementByText(LoginPage.NEW_USER_TEXT, this.newUserSelector);
        accountUserService.intercept();
    }

    static readonly NEW_USER_TEXT = 'New User'
}

export const loginPage = new LoginPage();