
/**
 * @description Obtiene el cuerpo (`body`) del iframe con el ID `frame1`.
 * Este comando personalizado de Cypress selecciona el iframe, verifica que su contenido no esté vacío,
 * y luego envuelve el cuerpo del documento (`contentDocument.body`) para que pueda ser utilizado en las pruebas.
 * @author github.com/aldimhernandez
 * @see {@link https://www.cypress.io/blog/working-with-iframes-in-cypress Cypress Blog: Working with iframes in Cypress}
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} El cuerpo del iframe envuelto en un objeto Cypress Chainable.
 */
Cypress.Commands.add('getIframe1Body', () => {
    return cy
        .get('iframe[id="frame1"]', { log: false })
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
})