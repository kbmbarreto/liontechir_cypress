import elementsLogin from "../elements/elementsLogin";

Cypress.Commands.add('inserirEmail', (email) => {
    cy.get(elementsLogin.login.usuario).clear().type(email)
})