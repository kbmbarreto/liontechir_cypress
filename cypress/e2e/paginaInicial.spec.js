/// <reference types="Cypress" />

describe('Testes da página inicial', () => {
  beforeEach(() => {
    cy.visit('/')
    })

    it.skip('Verificação dos componentes do menu estático', () => {
      cy.get('.sc-jObWnj').should("exist", true);
      cy.get('div[href="/dashboard"]').should('have.text', 'Home ')
      cy.get('div[href="/darf"]').should('have.text', 'Darf ')
      cy.get('div[href="/asset-position"]').should('have.text', 'Carteira B3 ')
      cy.get('div.sc-dPiLbb').should('have.text', 'Relatórios ')
      cy.get('div svg#menu').click()
    })

    it('Verificação dos componentes da seção Imposto a Pagar', () => {
      
      const message = 'Até o dia 15/08/2022 o imposto sob suas operações na bolsa serão lançados neste DARF'

      cy.get(elementsPaginaInicial.ImpostoAPagar.calendarioMes).should('be.visible')
      cy.get(elementsPaginaInicial.ImpostoAPagar.tituloImposto).contains("Imposto a Pagar")
      cy.get(elementsPaginaInicial.ImpostoAPagar.subtituloImposto).should('exist', true)
      cy.get(elementsPaginaInicial.ImpostoAPagar.valorImposto).contains('R$ 0,00')
      cy.get(elementsPaginaInicial.ImpostoAPagar.btnEditarEventosEspeciais).should('be.visible')
      cy.get(elementsPaginaInicial.ImpostoAPagar.btnFecharBalanco).should('be.visible')
      cy.get(elementsPaginaInicial.ImpostoAPagar.avisoDARF).should('have.text', message)
    })

    it.skip('Verificação dos componentes da seção Mercado a Vista', () => {
      cy.get(elementsPaginaInicial.MercadoAVista.tituloMercadoAVista).should("contain", "Mercado a vista")
      cy.get(elementsPaginaInicial.MercadoAVista.infoTituloMercadoAVista).should("exist", true)
      cy.get(elementsPaginaInicial.MercadoAVista.subtituloMercadoAVista).should("exist", true)
      cy.get(elementsPaginaInicial.MercadoAVista.txtVoceJaVendeu).should("exist", true)
      cy.get(elementsPaginaInicial.MercadoAVista.valorVoceJaVendeu).should("contain", "0")
      cy.get(elementsPaginaInicial.MercadoAVista.txtFaltam).should("exist", true)
      cy.get(elementsPaginaInicial.MercadoAVista.valorFaltam).should("contain", "R$ 0,00")
      cy.get(elementsPaginaInicial.MercadoAVista.valorLucroIsento).should("contain", "R$ 0,00")
      cy.get(elementsPaginaInicial.MercadoAVista.valorLucroIsentoSegEsp).should("contain", "R$ 0,00")
    })

    it.skip('Verificação dos componentes da seção Operações Comuns', () => {
      cy.get(elementsPaginaInicial.OperacoesComuns.tituloOperacoesComuns).should("exist", true)
      cy.get(elementsPaginaInicial.OperacoesComuns.valorResultadosOperacoesComuns).should("contain", "R$ 0,00")
    })

    it.skip('Verificação dos componentes da seção Operações Day Trade', () => {
      cy.get(elementsPaginaInicial.OperacoesDayTrade.tituloOperacoesDayTrade).should("exist", true)
      cy.get(elementsPaginaInicial.OperacoesDayTrade.valorOperacoesDayTrade).should("contain", "R$ 0,00")
    })

    it.skip('Verificação dos componentes da seção Operações Fundos Imobiliários', () => {
      cy.get(elementsPaginaInicial.OperacoesFundosImobiliarios.tituloOperacoesFundosImobiliarios).should("exist", true)
      cy.get(elementsPaginaInicial.OperacoesFundosImobiliarios.valorOperacoesFundosImobiliarios).should("contain", "R$ 0,00")
    })

    it.skip('Verificação dos componentes do rodapé', () => {
      cy.get('div.gBFgpb').should('be.visible')
      cy.get('div button[href="/term"]').should('contain', "Termo de uso")
      cy.get('div button[href="/privacy-policy"]').should('contain', "Política de Privacidade")
      cy.get('div button[href="https://www.liontechir.com.br/"]').should('have.text', 'LionTech IR © 2021')
      cy.get('span a[href="https://www.instagram.com/liontechir/"]').should('be.visible')
      cy.get('span a[href="https://www.linkedin.com/company/liontechir/"]').should('be.visible')
      cy.get('span a[href="https://www.facebook.com/LionTech-107030697994100"]').should('be.visible')
      cy.get('div#hubspot-messages-iframe-container').should('exist').click();
      cy.get('div.shadow-container').should('exist')
      cy.get('iframe[title="chat widget"]').click()
    })
})