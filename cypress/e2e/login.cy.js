/// <reference types="Cypress" />

describe("Login", () => {

  before(() => {
    it("Validar o título da Liontech", () => {
      cy.title()
        .should("be.equal", "LionTech IR");
    });
  })
  
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[type="submit"]')
      .as('submitButton')
  });
  
  context('Testes de login', () => {
    it("Validação da tela de login", () => {
      cy.clock()
      cy.get(".sc-bilyIR")
        .should("be.visible");
      cy.get('[alt="Liontech IR"]')
        .should("be.visible");
      cy.get("div label.bp3-label")
        .should("be.visible");
      cy.get('button[type="submit"]')
        .should("contain.text", "Entrar");
    });
  
    it("Fazer login com e-mail e senha correta", () => {
      cy.clock()
      cy.login(Cypress.env('correctEmail'), 
               Cypress.env('correctPassword'))
      cy.get('[alt="Liontech IR"]')
        .should("be.visible");
    });
  
    it("Fazer login com senha incorreta", () => {
      cy.clock()
      cy.errorPass(Cypress.env('correctEmail'),
                   Cypress.env('incorrectPassword'))
    });
  
    it("Fazer login com e-mail inválido", () => {
      cy.clock()
      cy.errorEmail(Cypress.env('incorrectEmail'),
                    Cypress.env('correctPassword'))
    });
    it('Validação do botão "Entrar" desabilitatdo por email incompleto', () => {
      cy.clock()
      cy.get("div label.bp3-label")
        .should("be.visible");
      cy.get('input[type="email"]')
        .clear()
        .type("vini_santos")
        .should("be.visible");
      cy.get('input[type="password"]')
        .clear()
        .type("V!n")
        .should("be.visible");
      cy.get('@submitButton')
        .should('be.disabled')
    })
  })

  context('Validar Links', () => {
    it('Verificar o link "Não tem uma conta?" abre em outra aba', function() {

      const message = 'Chegou a hora de você escolher o seu plano!'
      
      cy.clock()
      cy.get('a[href="/signup"]')
        .contains('Inscreva-se aqui')
        .should('be.visible')
        .click()
      cy.get('div.jCgGxm')
        .contains(message)
        .should('be.visible')
    })
    it('Verifica se o acesso á página de "Esqueceu a senha?" abre em outra aba', function(){
      cy.clock()
      
      cy.get('a[href="/forgot-password"]')
        .contains('Esqueceu a senha?')
        .should('be.visible')
        .click()
      cy.get('img[alt="Liontech IR"]')
        .should('be.visible')
      cy.get('div.bp3-form-group')
        .should('be.visible')
    })
  })
});
