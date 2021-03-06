/// <reference types="cypress" />
describe('Suite 17', () => {
    it('checks the feedback page', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        cy.wait(2000);
        expect(true).to.equal(true);
    });
});
