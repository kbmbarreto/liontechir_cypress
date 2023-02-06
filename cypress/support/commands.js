// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const ONE_SECONDS_IN_MS = 1000;

Cypress.Commands.add('login', (correctEmail, correctPassword) => {
  // cy.session([correctEmail, correctPassword], () => {;
  // cy.visit('/')
  cy.get("div label.bp3-label")
    .should("be.visible");
  cy.get('input[type="email"]')
    .clear()
    .type(correctEmail, { log: false })
    .should("be.visible");
  cy.get('input[type="password"]')
    .clear()
    .type(correctPassword, { log: false })
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