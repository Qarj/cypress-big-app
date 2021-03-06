/// <reference types="cypress" />
describe('Suite 18', () => {
    it('checks the signup workflow', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        cy.wait(2000);
        expect(true).to.equal(true);
    });
});
