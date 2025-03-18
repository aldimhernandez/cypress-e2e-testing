import BasePage from "../BasePage";

class FormPage extends BasePage {

    constructor() {
        super('DEMOQA', '/form', 'Practice Form');
    }
}

export const formPage = new FormPage();