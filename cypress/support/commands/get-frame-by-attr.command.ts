Cypress.Commands.add('getIframeByAttr', (attr: string) => {
    return cy
        .get(`iframe[${attr}]`, { log: false })
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
})