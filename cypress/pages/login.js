import elementsLogin from "../elements/login/elementsLogin";

class LoginPage {

  go() {
    cy.visit('/')
  }

  verifyScreen() {
    cy.get(elementsLogin.login.logoLiontech).should("exist")
    cy.get(elementsLogin.login.usuario).should("exist")
    cy.get(elementsLogin.login.senha).should("exist")
    cy.get(elementsLogin.login.msgErroLogin).should("not.exist")
    cy.get(elementsLogin.login.btnEsqueceuSuaSenha).should("contain", "Esqueceu sua senha?")
  }

  loginSucess() {
    cy.get(elementsLogin.login.usuario).clear().type('kleber.barreto@msn.com')
    cy.get(elementsLogin.login.senha).clear().type('Godisgood#2021')
    cy.get(elementsLogin.login.btnEntrar).click()
    cy.wait(2000)
  }

  loginFailPass() {
    cy.get(elementsLogin.login.usuario).clear().type('kleber.barreto@msn.com')
    cy.get(elementsLogin.login.senha).clear().type('Xiforimpula2000@#$')
    cy.get(elementsLogin.login.btnEntrar).should('contain', 'Entrar').click()
    cy.get(elementsLogin.login.msgErroLogin).should('have.css', 'color', 'rgb(24, 32, 38)')
    cy.get(elementsLogin.login.msgErroLogin).should('have.text', 'Credenciais inválidas!')
  }

  loginFailEmail() {
    cy.get(elementsLogin.login.usuario).clear().type('akalistrombosio@msn.com')
    cy.get(elementsLogin.login.senha).clear().type('Xiforimpula2000@#$')
    cy.get(elementsLogin.login.btnEntrar).click()
    cy.get(elementsLogin.login.msgErroLogin).should('have.css', 'color', 'rgb(24, 32, 38)')
    cy.get(elementsLogin.login.msgErroLogin).should('contain', 'Credenciais inválidas!')
  }
}

export default new LoginPage;