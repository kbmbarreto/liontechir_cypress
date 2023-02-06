/// <reference types="Cypress" />

describe("LIONTECH - Darf", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get('button[type="submit"]')
      .as("submitButton");

    cy.login(Cypress.env("correctEmail"),
             Cypress.env("correctPassword"));
  });
  it("Acessa a página do darf", () => {
    const title = "Listagem de Balanços Mensais (Memória de Cálculo)";

    cy.darf();

    cy.get("div.titleHeader")
      .contains(title)
      .should("be.visible");
  });

  it("Verifica a tabela na página", () => {
    cy.darf();

    cy.get(".gpmBlq")
      .should("be.visible");

    cy.get(".table")
      .parent()
      .contains("Mês/Ano");
  });

  it("Valida que a tabela tem um cabeçalho", () => {
    cy.darf();

    cy.get(".gpmBlq")
      .should("be.visible");

    cy.get("table.table")
      .should("be.visible");

    cy.get("thead")
      .should("be.visible");
  });

  it("Validando cabeçalhos de células da tabela", () => {
    cy.darf();

    cy.contains("#")
      .should("be.visible")
      .parent("tr")
      .should("be.visible")
      .within(() => {
        cy.get("th").eq(1).contains("Mês/Ano").should("be.visible");
        cy.get("th").eq(2).contains("Compras").should("be.visible");
        cy.get("th").eq(3).contains("Vendas").should("be.visible");
        cy.get("th").eq(4).contains("Lucro apurado").should("be.visible");
        cy.get("th").eq(5).contains("Balanço fechado?").should("be.visible");
        cy.get("th").eq(6).contains("Imposto").should("be.visible");
     });
  });

  it.only('Verifica os "td(s)" da tabela', () => {
    cy.darf()

    cy.get("table")
      .should("be.visible")
      .children()
      .should("be.visible")

    // cy.get('td')
    //   .should("be.visible")
    //   .should('have.length', 161)
      
    cy.get('tr td')
      .each(($td) => {
        cy.wrap($td)
          .should(($td) => {
            expect($td).to.have.length(1)
          })
      })
    })
  });
