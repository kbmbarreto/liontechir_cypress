class HomePage {
  menuRefs() {
    cy.get('.sc-jObWnj').should("exist", true);
    cy.get('div[href="/dashboard"]').should('have.text', 'Home ')
    cy.get('div[href="/darf"]').should('have.text', 'Darf ')
    cy.get('div[href="/asset-position"]').should('have.text', 'Carteira B3 ')
    cy.get('div.sc-dPiLbb').should('have.text', 'Relatórios ')
    cy.get('div svg#menu').click()
  }

  seçãoImposto() {

    const message = 'Até o dia 15/08/2022 o imposto sob suas operações na bolsa serão lançados neste DARF'

    cy.get(elementsPaginaInicial.ImpostoAPagar.calendarioMes).should('be.visible')
    cy.get(elementsPaginaInicial.ImpostoAPagar.tituloImposto).contains("Imposto a Pagar")
    cy.get(elementsPaginaInicial.ImpostoAPagar.subtituloImposto).should('exist', true)
    cy.get(elementsPaginaInicial.ImpostoAPagar.valorImposto).contains('R$ 0,00')
    cy.get(elementsPaginaInicial.ImpostoAPagar.btnEditarEventosEspeciais).should('be.visible')
    cy.get(elementsPaginaInicial.ImpostoAPagar.btnFecharBalanco).should('be.visible')
    cy.get(elementsPaginaInicial.ImpostoAPagar.avisoDARF).should('have.text', message)
  }

  menuFooter() {
    cy.get('div.gBFgpb').should('be.visible')
    cy.get('div button[href="/term"]').should('contain', "Termo de uso")
    cy.get('div button[href="/privacy-policy"]').should('contain', "Política de Privacidade")
    cy.get('div button[href="https://www.liontechir.com.br/"]').should('have.text', 'LionTech IR © 2021')
    cy.get('span a[href="https://www.instagram.com/liontechir/"]').should('be.visible')
    cy.get('span a[href="https://www.linkedin.com/company/liontechir/"]').should('be.visible')
    cy.get('span a[href="https://www.facebook.com/LionTech-107030697994100"]').should('be.visible')
  }

  chat() {

    // const messageChat = 'Olá, seja bem-vindo à LionTech, como podemos te ajudar hoje?'
    // const responseChat = 'Bom Dia, gostaria de saber mais sobre o sistema'

    cy.get('div#hubspot-messages-iframe-container').should('exist').click();
    cy.get('div.shadow-container').should('exist')
    cy.get('iframe[title="chat widget"]').click()
    // cy.get('div svg.conversations-visitor-open-icon').should('exist').click()
    // cy.get('div button.reagan--widget-loaded').should('be.visible').click()
    // cy.get('div.icasjL').should('have.text', messageChat)
    // cy.get('div[placeholder="Escreva uma mensagem"]').type(responseChat)
    // cy.get('button[aria-label="enviar mensagem"]').click()
    
  }
}

export default new HomePage