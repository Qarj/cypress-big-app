/// <reference types="cypress" />
describe('Suite 06', () => {
    it('checks gdpr compliance', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        cy.wait(5000);
        expect(true).to.equal(false);
    });
});
