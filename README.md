# liontechir_cypress

Projeto para automação de testes UI, com Cypress. Como estudo de caso, foi utilizado o sistema https://painel.liontechir.com.br. Um sistema com foco em carteiras de ações na bolsa de valores que, até o momento da criação deste projeto, encontra-se online.

## Ferramentas utilizadas

- JavaScript
- Cypress
- Node.js
- Allure Report

## Execução
Para executar os testes, foram disponibilizados os seguintes comandos:

Para limpar os relatórios antigos: `npm run allure:clear`<br>
Para rodar os testes: `npm run test`<br>
Para gerar os relatórios após a execução dos testes: `npm run allure:generate`<br>
Para abrir os relatórios gerados: `npm run allure:open`