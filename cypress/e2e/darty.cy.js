/// <reference types="cypress" />
describe('www.darty.com', () => {

    it('authentification', () => {
        cy.visit("www.darty.com")
        cy.get('Se connecter').type
        cy.get('[data-automation-id="login_home"]').click
        cy.get('[data-automation-id="email_input"]').type(guifofoal@yahoo.fr)
        cy.get('[data-automation-id="password_input"]').type('@Foal'))
        cy.get('[data-automation-id="login_button"]').click() 
    })
})