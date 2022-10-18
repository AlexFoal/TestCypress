/// <reference types="cypress" />
describe('www.backmarket.com', () => {

    it('authentification', () => {
        cy.visit("/")
        cy.get('[fill=currentColor height=24"]').click
        cy.get('[id="signin-email"]').type('guifofoal@yahoo.fr')
        cy.get('[id="signin-password"]').type('@Foal'))
        cy.get('[data-qa="signin-submit-button"]').click()
        cy.contains('data-qa="signin-submit-button"').should('eq','bevisible') 
    })
})