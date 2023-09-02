/// <reference types="Cypress" />
describe("Validação do site" , () => { 
 
  it.only("skyone" , () => { 
   
  cy.visit("https://skyone.solutions/") 
   
  Cypress.on('uncaught:exception', (err, runnable) => {     
      return false 
    }) 
   
    cy.get('.hamburger-menu').click() 
    cy.get('.menu-mobile > :nth-child(2) > a').click() 
    cy.title().should("be.equal" , "Cases - Sky.One") 
    cy.get('#hs-eu-cookie-confirmation-inner').should('be.visible')
    cy.get('#hs-eu-confirmation-button').should('be.visible').click()
    cy.get('.s-cases').scrollIntoView().should('be.visible')
    cy.get(':nth-child(2) > .dropdown-button').should('be.visible')
    cy.get(':nth-child(2) > .dropdown-button').children().last().should('be.visible')
    cy.get(':nth-child(2) > .dropdown-button > svg.feather-chevron-down').trigger('mouseover').invoke('show').click( {force: true} )
  })

})