/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')

  });
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `matheus${Date.now()}@teste.com`
    cy.preencherCadastro('Matheus', 'Rodrigues', email, '11985669852', 'Matheus123!55')
    cy.get('#signup-response').should('have.text', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Matheus28', 'Rodrigues', 'matheus@mail.com', '11985669852', 'Matheus123!55')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
})