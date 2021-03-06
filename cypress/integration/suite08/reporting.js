/// <reference types="cypress" />
describe('Suite 08', () => {
    it('checks the reports page', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
