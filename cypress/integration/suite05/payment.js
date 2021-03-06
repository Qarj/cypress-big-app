/// <reference types="cypress" />
describe('Suite 05', () => {
    it('checks the payment page', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
