import { attach } from '@badeball/cypress-cucumber-preprocessor';
import { IService } from './IService';
import { HttpMethod } from './types';
import { Interception } from 'cypress/types/net-stubbing';

export class BaseService implements IService {
    method: HttpMethod;
    url: string;
    alias: string;
    code: number;

    constructor(method: HttpMethod, url: string, alias: string, code: number) {
        this.method = method;
        this.url = url;
        this.alias = alias;
        this.code = code;
    }

    intercept(this: IService) {
        cy.intercept(this.method, this.url).as(this.alias);
    }

    waitAndSave(this: IService) {
        const interception = cy.wait(`@${this.alias}`);
        cy.wrap(interception).as(`${this.alias}Interception`);
    }

    getInterception(this: IService) {
        return cy.get(`@${this.alias}Interception`)
    }

    processResponse(this: IService, interception: Interception) {
        const statusCode = interception.response.statusCode,
            request = interception.request,
            response = interception.response;

        if (statusCode != this.code) {
            cy.log(`REQUEST ERROR: ${JSON.stringify(request)}`);
            attach(`REQUEST ERROR: ${JSON.stringify(request)}`, 'application/json');
            cy.log(`RESPONSE ERROR: ${JSON.stringify(response)}`);
            attach(`RESPONSE ERROR: ${JSON.stringify(response)}`, 'application/json');
        }
    }

    expectStatusCodeEqualTo(this: IService, interception: Interception) {
        const statusCode = interception.response.statusCode;
        expect(statusCode).to.equal(this.code);
    }

    responseValidation() {
        this.getInterception().then((interception) => {
            this.processResponse(interception);
        })
        this.getInterception().then((interception) => {
            this.expectStatusCodeEqualTo(interception);
        })
    }
}
