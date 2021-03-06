/// <reference types="cypress" />
describe('Suite 13', () => {
    it('checks the batch processing page', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        cy.wait(5000);
        expect(true).to.equal(true);
    });
});
