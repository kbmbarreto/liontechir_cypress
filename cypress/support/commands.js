const ONE_SECONDS_IN_MS = 1000;

Cypress.Commands.add('login', (correctEmail, correctPassword) => {
  cy.get("div label.bp3-label")
    .should("be.visible");
  cy.get('input[type="email"]')
    .clear()
    .type(correctEmail, { log: false } )
    .should("be.visible");
  cy.get('input[type="password"]')
    .clear()
    .type(correctPassword, { log: false } )
    .should("be.visible");
  cy.get('@submitButton')
    .click();
});

Cypress.Commands.add('errorPass', (correctEmail, incorrectPassword) => {
  cy.get("div label.bp3-label")
    .should("be.visible");
  cy.get('input[type="email"]')
    .clear()
    .type(correctEmail, { log: false })
    .should("be.visible");
  cy.get('input[type="password"]')
    .clear()
    .type(incorrectPassword, { log: false })
    .should("be.visible");
  cy.get('@submitButton')
    .click();
  cy.tick(ONE_SECONDS_IN_MS)
  cy.get('div span[icon="error"]')
    .should("be.visible");
});

Cypress.Commands.add('errorEmail', (incorrectEmail, correctPassword) => {
  cy.get("div label.bp3-label")
    .should("be.visible");
  cy.get('input[type="email"]')
    .clear()
    .type(incorrectEmail, { log: false })
    .should("be.visible");
  cy.get('input[type="password"]')
    .clear()
    .type(correctPassword, { log: false })
    .should("be.visible");
  cy.get('@submitButton')
    .click();
  cy.tick(ONE_SECONDS_IN_MS)
  cy.get('div span[icon="error"]')
    .should("be.visible");
})

Cypress.Commands.add('changePass', (correctEmail) => {
  cy.clock()
  cy.get('.bp3-label')
    .should('have.text', 'E-mail: ')
  cy.get('input[type="email"]')
    .type(correctEmail, { log: false })
})

Cypress.Commands.add('darf', () => {
  cy.get('a[href="/darf"]')
    .should('be.visible')
    .click()
  cy.url()
    .should('eq', Cypress.config().baseUrl + '/darf')
  cy.get('div.esOcXU')
    .should('be.visible')
})

Cypress.Commands.add('carteiraB3', () => {
  cy.get('span div.label')
    .contains('Carteira B3')
    .should('be.visible')

  cy.get('span svg desc')
    .invoke('show')

  cy.visit(Cypress.config().baseUrl + '/b3/position')

  cy.get('.titleHeader')
    .should('be.visible')
    .contains('Posição dos Ativos B3')
})

Cypress.Commands.add('balancosB3', () => {
  cy.get('span div.label')
      .contains('Carteira B3')
      .should('be.visible')
  
    cy.get('span svg desc')
      .invoke('show')
  
    cy.visit(Cypress.config().baseUrl + '/b3/balance')
  
    cy.get('.titleHeader')
      .should('be.visible')
      .contains('Balanços B3')
      .should('be.visible')
})

Cypress.Commands.add('transaction', () => {
  cy.get('span div.label')
    .contains('Carteira B3')
    .should('be.visible')
  
    cy.get('span svg desc')
      .invoke('show')
  
    cy.visit(Cypress.config().baseUrl + '/b3/transaction')

    cy.get('.titleHeader')
      .should('be.visible')
      .contains('Movimentação de Ativos')
      .should('be.visible')
})

Cypress.Commands.add('initialBalance', () => {
    cy.get('span div.label')
      .contains('Carteira B3')
      .should('be.visible')

    cy.get('span svg desc')
      .invoke('show')

    cy.visit(Cypress.config().baseUrl + '/initial-balance')

    cy.get('.titleHeader')
      .should('be.visible')
      .contains('Edição do Saldo Inicial do Ano')
      .should('be.visible')
})