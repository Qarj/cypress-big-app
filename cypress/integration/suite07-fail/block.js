/// <reference types="cypress" />
describe('Suite 07', () => {
    it('checks the block page', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(false).to.equal(true);
    });
});
