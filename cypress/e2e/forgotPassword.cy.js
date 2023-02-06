/// <reference types="Cypress" />

describe("Recuperação de senha", () => {
  //const ONE_SECONDS_IN_MS = 1000;
  beforeEach(() => {
    cy.visit('/forgot-password')
    cy.get('button[type="submit"]')
      .as('submitButton')
  })

  context('Senha', () => {
    it('Acessa a página de "Esqueceu a senha?"', () => {
      cy.clock()
      cy.get('img[alt="Liontech IR"]')
        .should('be.visible')
  
      cy.get('input[name="email"]')
        .clear()
        .should('be.visible')
  
      cy.get('button[type="submit"]')
        .should('be.disabled')
    })
  
    it('Preenche o campo email para mudança de senha', () => {
      cy.clock()
      cy.changePass(Cypress.env('correctEmail'))
    })
  
    it('Solicita mudança de senha com usuário existente', () => {
      cy.changePass(Cypress.env('correctEmail'))
  
      cy.get('@submitButton')
        .click()
        .should('be.enabled')
    })
  
    it('Solicita mudança de senha com usuário inexistente', () => {
      
      const incorrectEmail = 'email@example.com'
      
      cy.clock()
      
      cy.get('.bp3-label')
        .should('have.text', 'E-mail: ')
      cy.get('input[type="email"]')
        .type(incorrectEmail)
      cy.get('@submitButton')
        .click()
        .should('be.enabled')
      cy.get('div.bp3-intent-danger')
        .invoke('show')
        .should('be.visible')
      cy.get('div.bp3-intent-danger')
        .invoke('hide')
        .should('not.be.visible')
    })
  
    it('Clica no link de "Voltar ao login"', () => {
      cy.get('a[href="/"]')
        .should('be.visible')
        .click()
        
      cy.get('body')
    })
  })
})