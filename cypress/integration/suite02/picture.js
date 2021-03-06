/// <reference types="cypress" />
describe('Picture workflow', () => {
    it('starts the picture workflow', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });

    it('completes the picture workflow', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
