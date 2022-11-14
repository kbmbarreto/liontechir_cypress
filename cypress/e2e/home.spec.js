/// <reference types="Cypress" />

describe('LIONTECH - Guia Home', () => {
  const THREE_SECONDS = 3000
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[type="submit"]').as('submitButton')
    cy.typeLogin({ email: 'vini_santos7@live.com', password: 'V!nibj@E2@' })
    })

    it('Verifica os componentes da tela do menu lateral', () => {
      cy.clock()
      cy.get('ul').should('exist', true).should('be.visible');
      cy.get('a[href="/"]').should('have.text', 'Home')
      cy.get('a[href="/darf"]').should('have.text', 'DARF')
      cy.get('div.bp3-fill .label').should('contain', 'Carteira B3')
      cy.get('a[href="/report/income"]').should('have.text', 'Aux. IRPF')
      cy.get('div.bp3-fill .label').should('contain', 'Perfil')
      cy.get('img[alt="Sair"]').should('be.visible')
    })

    it('Verificação da sessão de Imposto a Pagar', () => {
      const message = 'Esse é o valor parcial da sua DARF.'
      cy.get('div.lt-card').should('be.visible').contains('Imposto a pagar')
      cy.get('button[type="button"]').invoke('show').should('be.visible').click()
      cy.get('button[type="button"]').invoke('hide').should('not.be.visible')
      cy.tick(THREE_SECONDS)
      cy.get('.sc-jKTccl').should('be.visible').contains(message)
      cy.get('div.iyPYWL').should('be.visible').contains('R$ 0,00')
      cy.get('button.hZLvQZ').should('be.disabled')
      cy.get('a[href="/special-events/2021-04"]').should('be.visible').contains('Eventos Especiais')
    })

    it('Verificação da sessão de Pendências', () => {
      const message = "Não há pendências para fechamento do balanço"
      cy.get('div.lt-card-outline').eq(0)
      cy.get('div.cuMSRk').should('have.text', 'Pendências')
      cy.get('div.sc-jKTccl').invoke('show').should('be.visible')
      cy.tick(THREE_SECONDS)
      cy.contains(message)
    })

    it('Verificação da sessão de Mercado a Vista', () => {
      const message = "Acompanhe aqui o limite de isenção para operações"
      cy.get('div.lt-card-outline').eq(1)
      cy.get('div.dAjEoz').should('be.visible')
      cy.tick(THREE_SECONDS)
      cy.contains(message).should('be.visible')
      cy.get('div.WSCVp').siblings().eq(4).should('be.visible')
    })

    it('Verifica o element hover do nome do usuário', () => {
      cy.get('div.edLuxe')
        .should('be.visible')
        .invoke('show')
        .click({ force: true })
        .trigger('mouseover')
    })

    it('Verificação da sessão de Ativos da B3', () => {
      cy.get('div.diHtQS').invoke('show').should('be.visible')
      cy.contains('Ativos B3')
      cy.get('div.ftMIJP').should('have.length', 3)
    })

    it('Verificação da sessão de Operações Comuns', () => {
      cy.get('div.ftMIJP').should('be.visible').eq(0)
      cy.get('div.iPlHMn').eq(4).should('be.visible')
    })

    it('Verificação da sessão de Operações Day Trade', () => {
      cy.get('div.ftMIJP').should('be.visible').eq(1)
      cy.get('div.iPlHMn').eq(4).should('be.visible')
    })

    it('Verificação da sessão de Operações Fundos Imobiliários', () => {
      cy.get('div.ftMIJP').should('be.visible').eq(2)
      cy.get('div.iPlHMn').eq(4).should('be.visible')
    })
})