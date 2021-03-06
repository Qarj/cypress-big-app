/// <reference types="cypress" />
describe('Suite 19', () => {
    it('checks the log functionality', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
