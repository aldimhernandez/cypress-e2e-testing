import BasePage from "../BasePage";

class NavBarPage extends BasePage {
    private readonly elementListSelector: string = 'span';

    navigateToPracticeForm() {
        this.clickElementByText(NavBarPage.PRACTICE_FORM_TEXT, this.elementListSelector);
    }

    navigateToFrameSection() {
        this.clickElementByText(NavBarPage.FRAME_TEXT, this.elementListSelector);
    }

    navigateToLoginSection() {
        this.clickElementByText(NavBarPage.LOGIN_TEXT, this.elementListSelector);
    }

    navigateToUploadAndDownloadSection() {
        this.clickElementByText(NavBarPage.UPLOAD_AND_DOWNLOAD_TEXT, this.elementListSelector);
    }

    static readonly PRACTICE_FORM_TEXT: string = 'Practice Form';
    static readonly FRAME_TEXT: string = 'Frames';
    static readonly LOGIN_TEXT: string = 'Login';
    static readonly UPLOAD_AND_DOWNLOAD_TEXT: string = 'Upload and Download';
}

export const navBarPage = new NavBarPage();