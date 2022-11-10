/// <reference types="Cypress" />

describe("LionTech - Inscreva-se", () => {
  beforeEach(() => {
    cy.visit('/signup')
  })

  it('Acessa a página de inscrição', () => {
    cy.clock()
    cy.get('img[src="/logo_orange.png"]')
      .should('be.visible')
  })

  it('Verifica o título da página de contratação', function() {
    const message = 'Chegou a hora de você escolher o seu plano!'
    cy.clock()
    cy.get('div')
      .contains(message)
      .should('be.visible')
  })
})