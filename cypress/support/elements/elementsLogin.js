const elementsLogin = {
    login: {
        logoLiontech: 'body > form > div > div > img',
        usuario: 'body > form > div > div > div:nth-child(2) > div > input',
        senha: 'body > form > div > div > div:nth-child(3) > div > input',
        btnEntrar: 'body > form > div > div > button',
        msgErroLogin: 'body > form > div > div > div.bp3-callout.bp3-intent-danger.bp3-callout-' +
            'icon.layout__Alert-sc-qfvydn-10.bUpHpT',
        btnEsqueceuSuaSenha: 'body > form > div > div > a',
    },

    ajuda: {
        avatarChatLiontech: 'body > div > div.Application__WidgetAppContainer-sc-1f2l0a1-0.dvBAhE.widget-app-container > span > div > button',
        cxPossoAjudar: 'body > div > div.Application__WidgetAppContainer-sc-1f2l0a1-0.dvBAhE.widget-app-container > div > div > p',
    }
}

export default elementsLogin;