/// <reference types="Cypress" />

describe("Testes da tela de login", () => {
  const ONE_SECONDS_IN_MS = 1000;
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[type="submit"]').as('submitButton')
  });

  it("Valida o título da aplicação", () => {
    cy.title().should("be.equal", "LionTech IR");
  });

  it("Verificação dos componentes na tela", () => {
    cy.clock()
    cy.get(".sc-bilyIR")
      .should("be.visible");
    cy.get('[alt="Liontech IR"]').should("be.visible");
    cy.get("div label.bp3-label").should("be.visible");
    cy.get('button[type="submit"]').should("contain.text", "Entrar");
  });

  it.only("Tentativa de login com e-mail e senha correta", () => {
    cy.clock()
    cy.typeLogin({ email: 'vini_santos7@live.com', password: 'V!nibj@E2@' })
  });

  it("Tentativa de login com senha incorreta", () => {
    cy.clock()
    cy.get("div label.bp3-label").should("be.visible");
    cy.get('input[type="email"]').clear().type("vini_santos7@live.com").should("be.visible");
    cy.get('input[type="password"]').clear().type("V!ni").should("be.visible");
    cy.get('@submitButton').click();
    cy.tick(ONE_SECONDS_IN_MS)
    cy.get('div span[icon="error"]').should("be.visible");
  });

  it("Tentativa de login com e-mail inválido", () => {
    cy.clock()
    cy.get("div label.bp3-label").should("be.visible");
    cy.get('input[type="email"]').clear().type("vini_santos7@live.br").should("be.visible");
    cy.get('input[type="password"]').clear().type("V!nibj@E2@").should("be.visible");
    cy.get('@submitButton').click();
    cy.tick(ONE_SECONDS_IN_MS)
    cy.get('div span[icon="error"]').should("be.visible");
  });

  it('Validação do botão "Entrar" desabilitatdo por email incompleto', () => {
    cy.clock()
    cy.get("div label.bp3-label").should("be.visible");
    cy.get('input[type="email"]').clear().type("vini_santos").should("be.visible");
    cy.get('input[type="password"]').clear().type("V!n").should("be.visible");
    cy.get('@submitButton').should('be.disabled')
  })

  it('Verificar que o "Não tem uma conta?" abre em outra aba', function() {
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
});
