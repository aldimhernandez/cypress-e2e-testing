import BasePage from "../BasePage";

class HomePage extends BasePage {
    private readonly navToFormSelector: string = '[class="card mt-4 top-card"]'

    constructor() {
        super('DEMOQA', '/');
    }

    navigateToFormSection() {
        this.clickElementByText(HomePage.FORM_CARD_TEXT, this.navToFormSelector);
    }

    static readonly FORM_CARD_TEXT: string = 'Forms';
}

export const homePage = new HomePage();