/// <reference types="Cypress" />

describe('Testes da tela de login', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Verificação dos componentes na tela', () => {
      login.verifyScreen()
    })

    it('Tentativa de login com e-mail e senhas correta', () => {
      login.loginSucess()
    })

    it('Tentativa de login com senha errada', () => {
      login.loginFailPass()
    })

    it('Tentativa de login com e-mail errado', () => {
      login.loginFailEmail()
    })
})