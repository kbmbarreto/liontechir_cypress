import elementsLogin from "../elements/login/elementsLogin";
import elementsPaginaInicial from "../elements/pagina_inicial/elementsPaginaInicial";
import elementsMenu from "../elements/pagina_inicial/elementsMenu";
import elementsRodape from "../elements/pagina_inicial/elementsRodape";

class HomePage {
  menuRefs() {
    cy.get('.sc-jObWnj').should("exist", true);
    cy.get('div[href="/dashboard"]').should('have.text', 'Home ')
    cy.get('div[href="/darf"]').should('have.text', 'Darf ')
    cy.get('div[href="/asset-position"]').should('have.text', 'Carteira B3 ')
    cy.get('div.sc-dPiLbb').should('have.text', 'Relatórios ')
    cy.get('div svg#menu').click()
  }

  menuFooter() {
    cy.get('div.gBFgpb').should('be.visible')
  //   cy.get(elementsRodape.menuRodape.termoDeUso).should("contain", "Termo de uso")
  //   cy.get(elementsRodape.menuRodape.politicaDePrivacidade).should("contain", "Política de Privacidade")
  //   cy.get(elementsRodape.menuRodape.copywright).should("exist", true)
  //   cy.get(elementsRodape.menuRodape.btnInstagram).should("exist", true)
  //   cy.get(elementsRodape.menuRodape.btnLinkedIn).should("exist", true)
  //   cy.get(elementsRodape.menuRodape.btnFacebook).should("exist", true)
  // 
  }
}

export default new HomePage