/// <reference types="cypress" />
describe('Suite 04', () => {
    it('checks the gateway page', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
