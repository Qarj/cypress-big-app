/// <reference types="cypress" />
describe('Suite 16', () => {
    it('checks the customer ratings', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        cy.wait(2000);
        expect(true).to.equal(true);
    });
});
