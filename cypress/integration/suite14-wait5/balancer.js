/// <reference types="cypress" />
describe('Suite 14', () => {
    it('checks the load balancer', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        cy.wait(5000);
        expect(true).to.equal(true);
    });
});
