/// <reference types="Cypress" />

describe("LionTech - Inscreva-se", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  context("Planos", () => {
    it("Acessa a página de inscrição", () => {
      cy.clock();

      cy.get('img[src="/logo_orange.png"]')
        .should("be.visible");
    });

    it("Verifica o título da página de contratação", () => {
      
      const message = "Chegou a hora de você escolher o seu plano!";

      cy.clock();

      cy.get("div")
        .contains(message)
        .should("be.visible");
    });
    it("Verifica o plano PREMIUM", () => {
      cy.clock();
      cy.get(".sc-gIBqdA")
        .contains("Premium")
        .should("be.visible");

      cy.get(".sc-bdvvtL")
        .contains("3990")
        .should("be.visible");

      cy.get("ul")
        .find("li")
        .first()
        .should("be.visible");

      cy.get("li")
        .eq(7)
        .should("contain", "Exchanges");

      cy.get("button.feKipL") 
        .first()
        .should("be.visible");
    });

    it("Verifica o plano BÁSICO", () => {
      cy.clock();

      cy.get(".sc-bUbRBg")
        .contains("Básico")
        .should("be.visible");

      cy.get(".sc-bdvvtL")
        .contains("1990")
        .should("be.visible");

      cy.get("ul")
        .find("li")
        .should("be.visible");

      cy.get("li")
        .should("contain", "Declaração Anual do Imposto de Renda");

      cy.get("button.feKipL")
        .should("be.visible")
        .last();
    });
  });

  context("Links Externos & Redes Sociais", () => {
    it("Verifica os links do rodapé", () => {
      cy.clock();
      cy.get("div.sc-ctqQKy")
        .should("contain", "LionTech IR © 2021");

      cy.get("a[href]")
        .siblings();

      cy.wrap({ href: 3 })
        .should("have.property", "href")
        .and("eq", 3);
    });

    it("Verifica que a página do instagram abre em outra aba sem a necessidade de um clique", () => {
      cy.get('a[href="https://www.instagram.com/liontechir/"]')
        .should("have.attr", "target", "_blank");
    });

    it("Verifica que a página do linkedin abre em outra aba sem a necessidade de um clique", () => {
      cy.get('a[href="https://www.linkedin.com/company/liontechir/"]')
        .should("have.attr", "target", "_blank");
    });

    it("Verifica que a página do facebook abre em outra aba sem a necessidade de um clique", () => {
      cy.get('a[href="https://www.facebook.com/LionTech-107030697994100"]')
        .should("have.attr", "target", "_blank");
    });
  });
});
