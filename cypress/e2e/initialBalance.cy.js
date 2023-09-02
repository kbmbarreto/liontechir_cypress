/// <reference types="Cypress" />

describe('LIONTECH - Edição do Saldo Inicial', () => {
  
  beforeEach(() => {
    cy.visit("/");

    cy.get('button[type="submit"]')
      .as("submitButton");

    cy.login(Cypress.env("correctEmail"),
             Cypress.env("correctPassword"));
  });

  it.only('Acessa o submenu Editar saldo inicial', () => {
    
    cy.step('Acesso á página de balanços')
    cy.initialBalance()

    cy.step('Confirma que fez acesso na seção de editar saldos')
    cy.get('form')
      .should('be.visible')
    });
    
  it('Preenche o campo de Prejuízo de FII', () => {

    cy.step('Acesso á página de balanços')
    cy.initialBalance()
    
    cy.get('.iPlHMn')
      .should('be.visible')
      .should('have.text', 'PREJUÍZO DE FII')
  
   });

  it('Preenche o campo de Prejuízo de DayTrade', () => {
    
    cy.step('Acesso á página de balanços')
    cy.initialBalance()
      
    cy.get('')
      .contains('Prejuízos Iniciais')
  });
  
  it('Preenche o campo de Prejuízo de Operações Comuns', () => {

    cy.step('Acesso á página de balanços')
    cy.initialBalance()
      
    cy.get('')
      .contains('Prejuízos Iniciais')
    
  });

  it('Clica no botão Adicionar', () => {
    
    cy.step('Acesso á página de balanços')
    cy.initialBalance()


  });
  
  it('Clica no botão Salvar', () => {
    
    cy.step('Acesso á página de balanços')
    cy.initialBalance()


  });
});