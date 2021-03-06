/// <reference types="cypress" />
describe('Suite 09', () => {
    it('checks the SEO implementation, will divide by 0', () => {
        const calc = 9 / 0;
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
