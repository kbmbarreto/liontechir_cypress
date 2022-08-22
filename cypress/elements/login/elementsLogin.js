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
        cxPossoAjudar: 'div#hubspot-messages-iframe-container',
        avatarChatLiontech: 'div button.undefined',
        messageChat: 'button[aria-label="Abrir chat ao vivo"]',
        writeMessage: 'div[aria-label="Escreva uma mensagem"]',
        sendMessage: 'button[aria-label="Fechar chat ao vivo"]',
    }
}

export default elementsLogin;