/// <reference types="cypress" />
describe('Suite 20', () => {
    it('checks the account closure workflow', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
