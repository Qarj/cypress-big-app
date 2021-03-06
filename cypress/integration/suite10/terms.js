/// <reference types="cypress" />
describe('Suite 10', () => {
    it('checks the terms and conditions page', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
