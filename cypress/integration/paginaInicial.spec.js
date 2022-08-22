import login from "../pages/login";
import home from "../pages/home";

describe('Testes da página inicial', () => {
    before(() => {
      login.go()
      login.verifyScreen()
      login.loginSucess()
    })

    it.skip('Verificação dos componentes do menu estático', () => {
      home.menuRefs()
    })

    it('Verificação dos componentes da seção Imposto a Pagar', () => {
      home.seçãoImposto()
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
      home.menuFooter()
      home.chat()
    })
})