import elementsLogin from "../elements/elementsLogin";
import elementsPaginaInicial from "../elements/pagina_inicial/elementsPaginaInicial";

describe('Testes da tela de login', () => {
    before(() => {
        cy.visit('https://painel.liontechir.com.br/')
    })

    it('Verificação dos componentes na tela', () => {
        cy.get(elementsLogin.login.logoLiontech).should("exist")
        cy.get(elementsLogin.login.usuario).should("exist")
        cy.get(elementsLogin.login.senha).should("exist")
        cy.get(elementsLogin.login.msgErroLogin).should("not.exist")
        cy.get(elementsLogin.login.btnEsqueceuSuaSenha).should("contain", "Esqueceu sua senha?")
    })

    it('Tentativa de login com senha errada', () => {

        cy.get(elementsLogin.login.usuario).clear().type('kleber.barreto@msn.com')
        cy.get(elementsLogin.login.senha).clear().type('Xiforimpula2000@#$')
        cy.get(elementsLogin.login.btnEntrar).should('contain', 'Entrar').click()
        cy.get(elementsLogin.login.msgErroLogin).should('contain', 'Credenciais inválidas!')
    })

    it('Tentativa de login com e-mail errado', () => {
        cy.get(elementsLogin.login.usuario).clear().type('akalistrombosio@msn.com')
        cy.get(elementsLogin.login.senha).clear().type('Xiforimpula2000@#$')
        cy.get(elementsLogin.login.btnEntrar).click()
        cy.get(elementsLogin.login.msgErroLogin).should('contain', 'Credenciais inválidas!')
    })

    it('Tentativa de login com e-mail e senhas corretas', () => {
        cy.get(elementsLogin.login.usuario).clear().type('kleber.barreto@msn.com')
        cy.get(elementsLogin.login.senha).clear().type('senha123')
        cy.get(elementsLogin.login.btnEntrar).click()
        cy.get(elementsPaginaInicial.ImpostoAPagar.tituloImposto).should('contain', 'Imposto a Pagar')
    })
})