# Liontech

Projeto para automação de testes UI, com Cypress.
Como estudo de caso, foi utilizado o sistema https://painel.liontechir.com.br. 

Um sistema com foco em carteiras de ações na bolsa de valores que, até o momento da criação deste projeto, encontra-se online.

## Documentação Cypress :memo:

https://docs.cypress.io/

## Documentação Allure Reports :memo:

https://docs.qameta.io/allure

### Pacotes NPM de instalação do Allure Reports

- https://www.npmjs.com/package/allure-commandline

```$ npm install -g allure-commandline --save-dev```

- https://www.npmjs.com/package/@shelex/cypress-allure-plugin

```npm i -D @shelex/cypress-allure-plugin```

## Clonar repositório :link:

### Acesse o repositório e em code escolha a opção que preferir copie e cole no terminal, espere o projeto baixar por completo.

git clone https://github.com/kbmbarreto/liontechir_cypress.git

## Ferramentas utilizadas

- ```JavaScript```
- ```Cypress```
- ```Node.js```
- ```Allure Report```

## Execução
Para executar os testes, foram disponibilizados os seguintes comandos:

Para rodar os testes em modo headless `npm run cy:run`<br>
Para rodar os testes em GUI: `npm run test`<br>
Para limpar os relatórios antigos: `npm run allure:clear`<br>
Para gerar os relatórios após a execução dos testes: `npm run allure:generate`<br>
Para abrir os relatórios gerados: `npm run allure:open`

## Autor :man_technologist: :copyright:
#### By Kleber Macedo :nerd_face:

### Contribuidor
#### By Vinicius Santos :computer: