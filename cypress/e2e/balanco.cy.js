/// <reference types="Cypress" />

describe('LIONTECH - Balanços B3', () => {
  
  beforeEach(() => {

    cy.step('Acessa a página')
    cy.visit("/");

    cy.get('button[type="submit"]')
      .as("submitButton");

    cy.step('Acessa com os dados válidos')
    cy.login(Cypress.env("correctEmail"),
             Cypress.env("correctPassword"));
  })

  context('Balanços B3', () => {
    it('Acessa o submenu balanços B3 do menu Carteira B3', () => {
      
      const message = 'Listagem de Balanços Mensais (Memória de Cálculo)'
  
      cy.step('Acesso á página de balanços')
      cy.balancosB3()
  
      cy.step('Confirma o acesso e titulo da seção')
      cy.get('div.esOcXU')
        .should('be.visible')
  
      cy.get('div')
        .parent('div')
        .find('.sc-bdvvtL')
        .contains(message)
    })

    it('Faz o export para o formato em Excel', () => {
      
      cy.step('Acesso á página de balanços')
      cy.balancosB3()

      cy.step('Exporta o balanço em excel')
      cy.get('button.bp3-intent-success')
        .as("exportExcel")
        .should('be.visible')
        .should('have.text', 'Exportar para Excel')
        .click()
        .wait(5000)
        .invoke('removeAttr', 'target', '_blank')
      
      cy.step('Download do arquivo')
      cy.readFile('cypress/downloads/xls1676153387726.xlsx')
        .should('exist')
      
      cy.step('**confirm downloaded file**')
    });

    it('Faz o export para o formato em PDF', () => {
      
      cy.step('Acesso á página de balanços')
      cy.balancosB3()

      cy.step('Exporta os ativos em PDF')
      cy.get('button.bp3-intent-primary')
        .as("exportPDF")
        .should('exist')
        .should('be.visible')
        .should('have.text', 'Exportar para PDF')
        .click()
        .wait(5000)
        .invoke('removeAttr', 'target', '_blank')

    });

    it('Faz a impressão dos balanços', () => {
      
      cy.step('Acesso á página de balanços')
      cy.balancosB3()

      cy.step('Verifica o botão de impressão e clica nele')
      cy.get('button .bp3-icon-print')
        .as("exportPrint")
        .should('exist')
        .should('be.visible')
    
        .find('svg')
        .parent('span')
        .should('exist')
        .click()
    });
  });

  context('Informações da tabela de balanços', () => {
    
    it('Verifica se tem uma tabela de balanços', () => {
      
      cy.step('Acessa a página de balanços')
      cy.balancosB3()

      cy.step('Valida o cabeçalho da tabela de balanços')
      cy.get('.table')
        .should('be.visible')
        .find('thead')
        .should('be.visible')
      
      cy.step('Valida o nome de uma coluna')
      cy.get('.tableHeadItem')
        .should('exist')
        .contains('Guia para pagamento')
        .should('be.visible')
    });

    it('Fechamento de balanço antigo', () => {
      
      cy.step('Acessa a página de balanços')
      cy.balancosB3()
      
      cy.step('Valida o cabeçalho da tabela de balanços')
      cy.get('.table')
        .should('be.visible')
        .find('thead')
        .should('be.visible')
      
      cy.step('Verifica mensagem de fechar balanço antigo')
      cy.get('tbody')
        .should('be.visible')
        .children('tr')
        .find('span')
        .contains('É necessário fechar o balanço mais antigo')

    });

    it('Fechamento de balanço', () => {

      cy.step('Acessa a página de balanços')
      cy.balancosB3()

      cy.step('Valida o cabeçalho da tabela de balanços')
      cy.get('.table')
        .should('be.visible')
        .find('thead')
        .should('be.visible')
      
      cy.step('Verifica o botão de fechar balanço')
      cy.get('tbody')
        .should('be.visible')
        .children('tr')
        .find('button')
        .contains('Fechar Balanço')
        .should('exist')
    });

    it('Sem pagamento de impostos', () => {

      cy.step('Acessa a página de balanços')
      cy.balancosB3()
      
      cy.step('Valida o cabeçalho da tabela de balanços')
      cy.get('.table')
        .should('be.visible')
        .find('thead')
        .should('be.visible')

      cy.step('Verifica mensagem que não há imposto para pagar')
      cy.get('tbody')
        .should('be.visible')
        .children('tr')
        .find('span')
        .contains('Não há imposto à pagar')
        .should('exist')
    });
  });
})
