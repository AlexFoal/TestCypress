/// <reference types="cypress" />

describe('Authentification', () => {

    beforeEach(() => {
        //Aller au site web BackMarket définie en BaseUrl
        cy.visit('/')

        cy.wait(3000)
        //Fermer la fenetre de l'utilisation de cookies
        cy.get('button[data-qa = "accept-cta"]').eq(0).click({force : true})
    })

    it('Authentification échouée', () => {

        //Ecrire un mauvais email/pass combo
        cy.get('input[id = "signin-email"]').type('mauvais@email.com')
        cy.get('input[id = "signin-password"]').type('mauvaisPass')
        cy.get('button[data-qa = "signin-submit-button"]').click()

        //Vérifier que la phrase d'invalidité des login apparait
        cy.get('p[class = "text-red-700 mt-4 body-2-light"]').should("exist")
        cy.get('p[class = "text-red-700 mt-4 body-2-light"]').should("contain.text", "Saisissez un e-mail et un mot de passe valides.")
    })

    it('Authentification réussie', () => {
        //Ecrire un bon email/pass combo
        cy.get('input[id = "signin-email"]').type('darthsilimar@gmail.com')
        cy.get('input[id = "signin-password"]').type('kikooLOL69??')
        cy.get('button[data-qa = "signin-submit-button"]').click()

        cy.wait(5000)
        
        //Vérifier que nous pouvons accedez a la page "Mon profil"
        cy.get('button[aria-label = "Sous-menu utilisateur"]').click()
        cy.get('a[href = "/fr-fr/dashboard/profile"]').eq(0).click()
        cy.title().should('contain', 'Mon profil')
    })
})  