/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('https://golden-movie-studio.vercel.app/')
    cy.get('#signup-firstname').type("Matheus")
    cy.get('#signup-lastname').type("Rodrigues")
    cy.get('#signup-email').type("mathrodsa@mail.com")
    cy.get('#signup-phone')
    cy.get('#signup-password').type("Matheus!11")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('have.text', 'Cadastro realizado com sucesso!')
  })
})