/// <reference types="Cypress" />

describe('LIONTECH - Movimentação de Ativos B3', () => {
  
  beforeEach(() => {

    cy.step('Acessa a página')
    cy.visit("/");

    cy.get('button[type="submit"]')
      .as("submitButton");

    cy.step('Acessa com os dados válidos')
    cy.login(Cypress.env("correctEmail"),
             Cypress.env("correctPassword"));
  })

  it.only('Acessa a página de movimentação de ativos', () => {
    
    const message = 'Veja aqui todas as movimentações'

    cy.step('Acessa a página de movimentação de ativos')
    cy.transaction()

    cy.step('Confirma o título da seção')
    cy.get('.iPlHMn')
      .should('be.visible')

    cy.get('div')
      .parent('div')
      .find('.sc-bdvvtL')
      .contains(message)
  });

  it('Faz validação do calendário na seção', () => {
    
    cy.step('Acessa a página de movimentação de ativos')
    cy.transaction()

    cy.step('Clica no calendário')
    cy.get('.ioOkKn')
      .should('be.visible')
      .click()
    
    cy.step('Faz a seleção de um mês')
    cy.get('button.sc-fXeWAj')
      .should('exist')
      .invoke('show')
      .contains('Ago')
      .should('be.visible')
      .click()
  });

  it('Verifica o cabeçalho da tabela', () => {
    
    cy.step('Acessa a página de movimentação de ativos')
    cy.transaction()

    cy.step('Valida o cabeçalho da tabela')
    cy.get('thead.tableHead')
      .should('exist')
      .contains('Compras')
      .should('be.visible')
  });

  it('Verifica se há movimentação de ativos', () => {
    
    cy.step('Acessa a página de movimentação de ativos')
    cy.transaction()

    cy.step('Confere se há informações de movimentação dos ativos')
    cy.get('table.table')
      .should('exist')
    
    cy.get('tbody.tableBody')
      .should('have.text', 'Não há movimentações')
      .should('be.visible')
  });

});