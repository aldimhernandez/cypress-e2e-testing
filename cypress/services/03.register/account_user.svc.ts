import { BaseService } from "../BaseService";

export const accountUserService = new BaseService(
    'GET',
    `${Cypress.env('account_v1_user')}`,
    'accountUserService',
    200
);
