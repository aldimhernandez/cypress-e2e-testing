export interface IPage {
    readonly title: string;
    readonly url: string;
    readonly h1?: string;

    validateTitle(expectedTitle: string): void;
    validateUrl(expectedUrl: string): void;
    validateH1?(expectedH1: string): void;
    pageRedirectValidation(): void;
}