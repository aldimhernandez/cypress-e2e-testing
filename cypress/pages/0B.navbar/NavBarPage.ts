import BasePage from "../BasePage";

class NavBarPage extends BasePage {
    private readonly elementListSelector: string = '.element-list';

    navigateToPracticeForm() {
        this.clickElementByText(NavBarPage.PRACTICE_FORM_TEXT, this.elementListSelector);
    }

    navigateToFrameSection() {
        this.clickElementByText(NavBarPage.FRAME_TEXT, this.elementListSelector);
    }

    static readonly PRACTICE_FORM_TEXT: string = 'Practice Form';
    static readonly FRAME_TEXT: string = 'Frames';
}

export const navBarPage = new NavBarPage();