/// <reference types="cypress" />
const error = require('does_not_exist.js');
describe('Suite 09', () => {
    it('checks the SEO implementation, will not be able to run', () => {
        cy.log(`Running on brand ${Cypress.env('brandHost')}`);
        expect(true).to.equal(true);
    });
});
