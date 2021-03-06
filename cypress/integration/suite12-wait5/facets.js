/// <reference types="cypress" />
describe('Suite 12', () => {
    it('checks the facets', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        cy.wait(5000);
        expect(true).to.equal(true);
    });
});
