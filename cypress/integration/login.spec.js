import login from "../pages/login";

describe('Testes da tela de login', () => {
    beforeEach(() => {
      login.go()
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