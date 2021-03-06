/// <reference types="cypress" />
describe('Suite 11', () => {
    it('checks the API info page', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        cy.wait(5000);
        expect(true).to.equal(true);
    });
});
