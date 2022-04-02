import elementsLogin from "../elements/elementsLogin";
import elementsPaginaInicial from "../elements/pagina_inicial/elementsPaginaInicial";

describe('Testes da página inicial', () => {
    before(() => {
        cy.visit('https://painel.liontechir.com.br/')
        cy.get(elementsLogin.login.usuario).clear().type('kleber.barreto@msn.com')
        cy.get(elementsLogin.login.senha).clear().type('Godisgood#2021')
        cy.get(elementsLogin.login.btnEntrar).click()
        cy.wait(5000)
    })

    it('Verificação dos componentes do menu estático', () => {
        cy.get(elementsMenu.menuEstatico.home).should("exist", true)
        cy.get(elementsMenu.menuEstatico.darf).should("exist", true)
        cy.get(elementsMenu.menuEstatico.carteira).should("exist", true)
        cy.get(elementsMenu.menuEstatico.relatorios).should("exist", true)
    })

    it('Verificação dos componentes do rodapé', () => {
        cy.get(elementsRodape.menuRodape.termoDeUso).should("contain", "Termo de uso")
        cy.get(elementsRodape.menuRodape.politicaDePrivacidade).should("contain", "Política de Privacidade")
        cy.get(elementsRodape.menuRodape.copywright).should("exist", true)
        cy.get(elementsRodape.menuRodape.btnInstagram).should("exist", true)
        cy.get(elementsRodape.menuRodape.btnLinkedIn).should("exist", true)
        cy.get(elementsRodape.menuRodape.btnFacebook).should("exist", true)
    })

    it('Verificação dos componentes da seção Imposto a Pagar', () => {
        cy.get(elementsPaginaInicial.ImpostoAPagar.calendarioMes).should("exist", true)
        cy.get(elementsPaginaInicial.ImpostoAPagar.tituloImposto).should("contain", "Imposto a Pagar")
        cy.get(elementsPaginaInicial.ImpostoAPagar.subtituloImposto).should("exist", true)
        cy.get(elementsPaginaInicial.ImpostoAPagar.valorImposto).should("contain", "R$ 0,00")
        cy.get(elementsPaginaInicial.ImpostoAPagar.btnEditarEventosEspeciais).should("exist", true)
        cy.get(elementsPaginaInicial.ImpostoAPagar.btnFecharBalanco).should("exist", true)
        cy.get(elementsPaginaInicial.ImpostoAPagar.avisoDARF).should("exist", true)
    })

    it('Verificação dos componentes da seção Mercado a Vista', () => {
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

    it('Verificação dos componentes da seção Operações Comuns', () => {
        cy.get(elementsPaginaInicial.OperacoesComuns.tituloOperacoesComuns).should("exist", true)
        cy.get(elementsPaginaInicial.OperacoesComuns.valorResultadosOperacoesComuns).should("contain", "R$ 0,00")
    })

    it('Verificação dos componentes da seção Operações Day Trade', () => {
        cy.get(elementsPaginaInicial.OperacoesDayTrade.tituloOperacoesDayTrade).should("exist", true)
        cy.get(elementsPaginaInicial.OperacoesDayTrade.valorOperacoesDayTrade).should("contain", "R$ 0,00")
    })

    it('Verificação dos componentes da seção Operações Fundos Imobiliários', () => {
        cy.get(elementsPaginaInicial.OperacoesFundosImobiliarios.tituloOperacoesFundosImobiliarios).should("exist", true)
        cy.get(elementsPaginaInicial.OperacoesFundosImobiliarios.valorOperacoesFundosImobiliarios).should("contain", "R$ 0,00")
    })
})