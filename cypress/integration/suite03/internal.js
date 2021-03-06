/// <reference types="cypress" />
describe('Suite 03', () => {
    it('checks the internal page', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
