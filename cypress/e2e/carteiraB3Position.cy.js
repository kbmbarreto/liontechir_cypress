/// <reference types="Cypress" />

describe('LIONTECH - Posição dos Ativos B3', () => {
  
  beforeEach(() => {
    cy.visit("/");

    cy.get('button[type="submit"]')
      .as("submitButton");

    cy.login(Cypress.env("correctEmail"),
             Cypress.env("correctPassword"));
  });
  
  context('Ativos B3', () => {
    it('Acessa o submenu carteira da carteira B3', () => {

      cy.step('Acesso á página de posição de ativos')
      cy.carteiraB3()
      
      cy.step('Confirma o acesso e titulo da seção ')
      cy.get('div.esOcXU')
        .should('be.visible')
    })
  
    it('Faz o export para o formato em Excel', () => {
      
      cy.step('Acesso á página de posição de ativos')
      cy.carteiraB3()

      cy.step('Exporta os ativos em excel')
      cy.get('button.bp3-intent-success')
        .as('exportExcel')
        .should('be.visible')
        .should('have.text', 'Exportar para Excel')
        .click()
        .wait(5000)
        .invoke('removeAttr', 'target', '_blank')

      cy.step('Download do arquivo')
      cy.readFile('cypress/downloads/xls1676153387726.xlsx')
        .should('exist')
      
      cy.step('**confirm downloaded file**')
    })
    
    it('Faz o export para o formato em PDF', () => {
      
      cy.step('Acesso á página de posição de ativos')
      cy.carteiraB3()

      cy.step('Exporta os ativos em PDF')
      cy.get('button.bp3-intent-primary')
        .as("exportPDF")
        .should('exist')
        .should('be.visible')
        .should('have.text', 'Exportar para PDF')
        .click()
        .wait(5000)
        .invoke('removeAttr', 'target')
    })
  
    it('Faz a impressão dos ativos', () => {
      
      cy.step('Acesso á página de posição de ativos')
      cy.carteiraB3()
  
      cy.step('Verifica o botão de impressão e clica nele')
      cy.get('button .bp3-icon-print')
        .as("exportPrint")
        .should('exist')
        .should('be.visible')
    
        .find('svg')
        .parent('span')
        .invoke('show')
        .click()
    })
  
    it('Verifica se há uma tabela de ativos', () => {
  
      cy.step('Acesso á página de posição de ativos')
      cy.carteiraB3()
  
      cy.get('table')
        .should('have.length', 3)
        .should('be.visible')
  
      cy.get('thead')
        .should('have.length', 3)
        .should('be.visible')
        .contains('Quantidade')
  
      cy.get('tbody')
        .should('exist')
        .should('have.length', 3)
        .contains('VIIA3')
  
      cy.get('tbody tr')
        .should('have.length', 9)
    })
  })
})