const elementsLogin = {
    login: {
        logoLiontech: 'body > form > div > div > img',
        usuario: 'input[name=email]',
        senha: 'input[name=password]',
        btnEntrar: 'button[type=submit]',
        msgErroLogin: 'div.bp3-intent-danger',
        btnEsqueceuSuaSenha: 'a.bp3-button',
    },

    ajuda: {
        avatarChatLiontech: 'div button.undefined',
        cxPossoAjudar: 'div div.Application__WidgetAppContainer-sc-1f2l0a1-0.dvBAhE.widget-app-container',
        messageChat: 'div[aria-label="Mensagem do agente: Olá, seja bem-vindo à LionTech, como podemos te ajudar hoje?"]',
        writeMessage: 'div[aria-label="Escreva uma mensagem"]',
        sendMessage: 'button[aria-label="Fechar chat ao vivo"]',
    }
}

export default elementsLogin;