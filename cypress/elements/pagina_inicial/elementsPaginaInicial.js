
const elementsPaginaInicial = {
    ImpostoAPagar: {
        calendarioMes: 'body > div > div.styles__Main-sc-1ab02in-1.fOHRB > div > ' +
            'div.styles__Flex-sc-1zcmh4-7.efwfct > div.styles__Flex-sc-1zcmh4-7.cZfuxa > div.styles__Flex-sc-1zcmh4-7.emUvTV > div > div',
        tituloImposto: 'body > div > div.styles__Main-sc-1ab02in-1.fOHRB > div > div.styles__Flex-sc-1zcmh4-7.' +
            'efwfct > div.styles__Flex-sc-1zcmh4-7.cZfuxa > div.styles__Title-sc-1zcmh4-2.JKldh',
        subtituloImposto: 'body > div > div.styles__Main-sc-1ab02in-1.fOHRB > div > div.styles__Flex-sc-' +
            '1zcmh4-7.efwfct > div.styles__Flex-sc-1zcmh4-7.cZfuxa > div.styles__Text-sc-1zcmh4-4.hPnHMf',
        valorImposto: '//*[@id="__next"]/body/div/div[2]/div/div[1]/div[1]/div[4]/div',
        btnEditarEventosEspeciais: '//*[@id="__next"]/body/div/div[2]/div/div[1]/div[1]/button[1]',
        btnFecharBalanco: '//*[@id="__next"]/body/div/div[2]/div/div[1]/div[1]/button[2]',
        avisoDARF: '//*[@id="__next"]/body/div/div[2]/div/div[1]/div[1]/div[5]/div/div',
    },
    MercadoAVista: {
        tituloMercadoAVista: '//*[@id="__next"]/body/div/div[2]/div/div[1]/div[2]/div[1]/div',
        subtituloMercadoAVista: 'body > div > div.styles__Main-sc-1ab02in-1.fOHRB > div > ' +
            'div.styles__Flex-sc-1zcmh4-7.efwfct > div.styles__Flex-sc-1zcmh4-7.fqqqDE > div.styles__Text-sc-1zcmh4-4.kZmrMG',
        infoTituloMercadoAVista: 'body > div > div.styles__Main-sc-1ab02in-1.fOHRB > div > div.styles__Flex-sc-1zcmh4-7' +
            '.efwfct > div.styles__Flex-sc-1zcmh4-7.fqqqDE > div.styles__Flex-sc-1zcmh4-7.jRZJGF > span > span > span > span > span',
        txtVoceJaVendeu: 'body > div > div.styles__Main-sc-1ab02in-1.fOHRB > div > div.styles__Flex-sc-1zcmh4-7.efwfct > ' +
            'div.styles__Flex-sc-1zcmh4-7.fqqqDE > div:nth-child(3) > div.styles__Text-sc-1zcmh4-4.jlQIGi',
        valorVoceJaVendeu: 'body > div > div.styles__Main-sc-1ab02in-1.fOHRB > div > div.styles__Flex-sc-1zcmh4-7.efwfct > ' +
            'div.styles__Flex-sc-1zcmh4-7.fqqqDE > div:nth-child(3) > div.styles__Text-sc-1zcmh4-4.hMVPET',
        txtFaltam: 'body > div > div.styles__Main-sc-1ab02in-1.fOHRB > div > div.styles__Flex-sc-1zcmh4-7.efwfct > div.styles_' +
            '_Flex-sc-1zcmh4-7.fqqqDE > div:nth-child(5) > div.styles__Text-sc-1zcmh4-4.jlQIGi',
        valorFaltam: '//*[@id="__next"]/body/div/div[2]/div/div[1]/div[2]/div[5]/div[2]',
        valorLucroIsento: '//*[@id="__next"]/body/div/div[2]/div/div[1]/div[2]/div[5]/div[2]',
        valorLucroIsentoSegEsp: '//*[@id="__next"]/body/div/div[2]/div/div[1]/div[2]/div[6]/div[2]',
    },
    OperacoesComuns: {
      tituloOperacoesComuns: '//*[@id="__next"]/body/div/div[2]/div/div[2]/div[1]/div[1]/div/div[2]',
      valorResultadosOperacoesComuns: '//*[@id="__next"]/body/div/div[2]/div/div[2]/div[1]/div[2]/div[2]',
    },
    OperacoesDayTrade: {
        tituloOperacoesDayTrade: '//*[@id="__next"]/body/div/div[2]/div/div[2]/div[2]/div[1]/div/div[2]',
        valorOperacoesDayTrade: '//*[@id="__next"]/body/div/div[2]/div/div[2]/div[2]/div[2]/div[2]',
    },
    OperacoesFundosImobiliarios:{
        tituloOperacoesFundosImobiliarios: '//*[@id="__next"]/body/div/div[2]/div/div[2]/div[3]/div[1]/div/div[2]',
        valorOperacoesFundosImobiliarios: '//*[@id="__next"]/body/div/div[2]/div/div[2]/div[3]/div[2]/div[2]',
    }
}

export default elementsPaginaInicial;