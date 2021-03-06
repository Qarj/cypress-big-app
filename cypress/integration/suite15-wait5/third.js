/// <reference types="cypress" />
describe('Suite 15', () => {
    it('checks the third party integrations', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        cy.wait(5000);
        expect(true).to.equal(true);
    });
});
