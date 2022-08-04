# Introdução a TypeScript

Tem um comportamento parecido com o Js, porém um pouco mais tipado. Exemplo disso é ao declarar funções você ter a opção de definir quais tipos os parâmetros terão.

Tem vários exemplos no 'teste-recursos.ts' na pasta Introdução a TypeScript.

Essa discussão do GitHub fala um pouco sobre **executionPolicy restriced** que era o erro que estava dando ao executar o tsc --init. Também tem o próprio site do TS, https://www.typescriptlang.org/download.

Lembrar de toda vez rodar  o node "Watch", ele é o responsável por fazer o tsc iniciar.

Para começar um projeto em TypeScript seguir os seguintes passos:



```
npm init

npm install --save-dev typescript (se ainda nao tiver instalado, ou nao for global)

npm install lite-server

tsc --init

```



Depois disso, ir no package.json e adicionar no bloco scripts:

```
"start": "lite-server",

"watch": "tsc --watch"

```

Importante após tudo isso colocar a pasta "node_modules" no .gitignore. Caso nao tenha o arquivo, so usar no bash o "touch .gitignore".
