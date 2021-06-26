/// <reference types="cypress" />
describe('Suite 10', () => {
    it('checks the terms and conditions page but has runtime error', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
        cy.wrap({}).as('undefined');
        cy.get('@undefined').then((nothing) => {
            nothing.undefinedFunction();
        });
    });
});
