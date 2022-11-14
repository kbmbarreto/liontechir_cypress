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

Cypress.Commands.add('typeLogin', (user) => {
    cy.clock()
    cy.get("div label.bp3-label").should("be.visible");
    cy.get('input[type="email"]')
      .clear()
      .type(user.email)
      .should("be.visible");
    cy.get('input[type="password"]')
      .clear()
      .type(user.password)
      .should("be.visible");
    cy.get('@submitButton').click();
  });