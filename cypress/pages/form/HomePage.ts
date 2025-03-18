import BasePage from "../BasePage";


class HomePage extends BasePage {
    private readonly navToFormSelector: string;
    private readonly formCardText: string;

    constructor() {
        super('DEMOQA', '/');
        this.navToFormSelector = '[class="card mt-4 top-card"]';
        this.formCardText = 'Forms';
    }

    navigateToFormSection() {
        this.clickElementByText(this.formCardText, this.navToFormSelector);
    }
}

export const homePage = new HomePage();