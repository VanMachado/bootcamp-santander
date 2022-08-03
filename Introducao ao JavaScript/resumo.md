# Introdução a JavaScript

O JS possui uma **tipagem dinâmica**. Suas funções tem uma sintaxe e papeis muito similar a outras linguagens, tendo a palavra reservada **function**, passagem de **parâmetros** e caso queira usar esse valor em outro momento, usa-se o **return**.

Usando o **console.log()** tem o msm efeito do **sysout** ou **printf**, em java e c, respectivamente.

#### Utilização do console

Para usar o console basta usar o comando **node "arquivo.js"** que irá aparecer o resultado no mesmo.

O **DOM** é o **Document Object Model**, que serve de histórico e mapeamento de alterações.  No próprio navegador apertando **"ctrl + shift + i" ou F12** e   usando a palavra reservada **document** podemos acessar vários comportamentos para interagir com os elementos. Ex.: document.getElementByTagName(tagDoElemento) para achar a lista dos elementos procurados, podendo guardar ele em uma variável para interação.

#### **Operadores de comparação**

Alguns exemplos de operadores no JS são:

- **==** - compara apenas o valor
- **===** - compara o valor e o tipo
- **!= e !==** - analogamente ao igual
- **if ternário** - if(codição ? expressão1 : expressão2 [faz o papel do **else**])

#### Variáveis

**Var**, **const** e **Let** são usados em js, porém var tem um escopo global e let so vale no bloco declarado. Por boa prática usa-se o let, caso queira escopo global, declarar no começo. Constantes são declaradas em **SNAKE_UPPER_CASE**.

**Hoisting** é quando você utiliza uma variável ou função sem declarar ela antes.

- **va**r - global ou local, redeclara, reatribui e faz hoisting

- **let** - loca, não pode ser redeclarada, pode ser reatribuída e não faz hoisting

- **const** - local, não aceita nenhum dos parâmetros citados acima.

#### Tipos de dados

São divididos em dois tipos, os **primitivos** e os **compostos**.

- Primitivos - numbers, string, boolean, null e undefined, sendo os dois últimos conhecidos como triviais
- Compostos - objetos e arrays

A vantagem de ter esses tipos de variáveis é poder lançar mão dos métodos delas como o **length**, **concat**, **ceil** entre outros.

Sobre os **arrays** nada mais são do que os vetores, listas iteráveis.  Assim como os outros o array tem seus metodos, como o **includes** (checa se existe), **every** (checa se todo item tem aquele valor, com essa sintaxe: **array.every( item => item === valor)**), **some**, obedecendo a msm sintaxe, **reverse** entre outros.

A biblioteca do **object** tem muitos métodos que podemos lançar mão, mas uma maneira que é especifica do JS de popular ele é a seguinte, **objeto.atributo = valor**.  Agr se eu criar um atributo fora do meu objeto e quiser incluir no mesmo, faço assim, **objeto.[artibuCriado] = valor**.

#### Funções

Podem ser anônimas, callbacks, autoinvocáveis, que tem seu escopo entre parênteses e ao final, outro parênteses, dessa maneira: 

**Autoinvocáveis**

(

​    function(){

​    }

)();   

**Callbacks**

const calc = function (operacao, num1, num2) {

​    return operacao(num1, num2);

}

const soma = function (num1, num2){

​    return num1 + num2;

}

const resultadoSoma = calc(soma, 1, 2);

O **spread** é uma forma de dividir um array em partes, podendo ser passado como argumento em uma função, por exemplo. Sua sintaxe é simples, basta adicionar "***...***" antes do array.

Também posso contar o tamanho de algo fazendo o procedimento inverso, isso se chama **rest**.

Ex.: 

function confereTamanho (...args) {

​    console.log(args.lenght);

}

confereTamanho(1,2); //retorna 2

Também podemos usar o **destructuring** para pegarmos apenas um, ou mais argumentos específicos do array. Ex.:

`const user = {`

        id: 42;
    
        fullname = {
    
            firstName = 'Sr'
    
            lastName = 'Batata'
    
        }

`}`

`function userId ({id}) {`

        return id;

} 

`fuction nomeCompleto ({fullname: {firstName: first. lastName: last }){`

`    return  '${first} ${last}' ;`

`}`

`userId (user);`

nomeCompleto (user);

No código **funcoes** existem alguns exemplos dos métodos e comportamentos citados.

Ao usar o método "**call**", você  faz com que o "**this**" da função se refira ao **objeto** passado como argumento do método.

Já as **Arrow functions** tem a seguinte sintaxe, "const helloWorld = () => "Hello World!";

Detalhe importante, **arrow functions NÃO** fazem  hoisting, ou seja, nao posso usá-la antes de declará-la e iniciá-la. Não usar arrow functions como método de objetos.



O **parseInt**, que aparece em um desafio de código, é utilizado para transformar strings em numeros num range de 2 a 36. Na resolução do problema ele segue a msm lógica do **.reduce**.

#### Maps

É uma estrutura chaveada que possui alguns métodos, dos quais os mais comuns são os de definir, mostrar e apagar, sendo eles **set**, **get** e **delet** respectivamente.

#### Set

É uma estrutura chaveada parecida com o Array, porém só admite valores únicos. Alguns métodos mais comuns são o adicionar, consultar e deletar, sendo eles **add**, **has**, e **delete**, respectivamente. O set não possui a propriedade **length** e sim a **size**.

#### Métodos Map, Filter e Reduce

O método map cria um novo array, sem modificar o original. Sua sintaxe é **array.map(callback, thisArg)**. No **foreach** eu também consigo fazer algo similar, porém necessito de um array auxiliar.

Com o **filter** é uma maneira de criar um novo array correspondente as condições passadas no filtro. Sua sintaxe é essa: **array.filter(callback, thisArg)**, onde, assim como o map, o **callback** é a função a ser executada em cada elemento, já o **thisArg** é opcional e representa o valor de **this** na função. Ex.: 

`const  frutas = ['maçã fuji', 'macã verde', 'abacaxi', 'pêra']`

 `frutas.filter((fruta) => fruta.includes('maçã')) `

 `//retorna ['maçã fuji', 'macã verde']; ` 

O **reduce** retorna um valor único. Sua sintaxe é parecida com os dois anteriores, sendo: **array.reduce(callBack, initialValue)** como callBack sendo executado no acumulador e o **initialValue** é o valor o qual o retorno final ira interagir. Demais exemplos estarão nas funções, ou nesse repositório: https://github.com/stebsnusch/basecamp-javascript/tree/main/map-filter-reduce

#### Tratamento de exeções

O **erro** acontece em tempo de execução, onde possui uma mensagem, linha, nome e Call Stack.

Já a **exception** é referente a estrutura do seu código.

O **throw** serve para retornar uma mensagem de erro mais amigável. Ex.: 

**... if(!string) throw "Palavra invalida!"; ...**  Dessa maneira, ao verificar a condição retorna uma mensagem de "erro".

Já o **try/catch** ele vai literalmente tentar um bloco de cóigo e retornar uma mensagem de erro, se ocorrer, com tratamento.

O **finaly** é uma instrução que será chamada, dando erro ou não.

#### Assincronicidade e consumo de API

O conceito de assíncrono no JS é poder fazer requisições e continuar o fluxo sem ter a resposta ainda.

Já **promises** é o conceito de ter a possibilidade da sua requisição, ainda **indefinida**, ser concluída ou rejeitada. Seus 3 estados são **Pending**, **Fulfilled** e **Rejected**.

Para esperar o resultado de uma promise usa-se a palavra reservada **await**.

O método **fetch()** vai ser uma das maneiras de se interagir com as **API's**, que também retorna uma **promise**, logo sendo utilizável o método **then** e precisando usar o **await**.

Link alternativo para **catAPI**: https://codepen.io/Chanadian/pen/jxRWvg

#### Orientação a Objetos com Js

Os paradigmas se divedem em dois, **Imperativo** e **Descritivo**. O imperativo foca em **COMO** vamos resolver o problema, já o descritivo foca **NO QUE** será feito.

A **Abstração** é o processo de simplificar os aspectos das coisas, com o intuito de facilitar a comunicação e interação com o mesmo. 

A **Herança** é a capacidade de comportamentos serem passados para classes "filhas".

O **Encapsulamento**, é o isolamento dos metodos do restante do códigos.

O **Polimorfismo** é a capacidade de ter a mesma classe "pai", porém com alguns comportamentos próprios.



```
let lines = [2,2,2,2];

let soma = 0;

for(i = 0;i < 4;i++){

  let transfor = parseInt(lines[i])

  soma += transfor;

}

//ou

// let transfor = lines.reduce(function(prev, current){

//   return prev + current;

// });

// soma += transfor;

console.log(soma-3);

```

#### Módulos

Eles que permitem exportar e importar arquivos, permitindo uma melhor organização de código.

**Export { o que vai ser exportado separodo por virgula}** - essa é  a sintaxe do named export

**Export default oQueVocêVaiExportar** - sitanxe do default export, apenas um por arquivo.

o **import** é semelhante, com a diferença de que usa a palavra reservada **from**.

#### D.O.M

É o **Document Object Model**, é o padrão para interagirmos com os elementos HTML. Já o **B.O.M** é o **Browser Object Model**, que é como se organiza o objeto **Window**.

De maneira simples, o D.O.M é justamente a divisão estruturada de cada parte html, como as tags: head, body, div, img, h1 e assim por diante. Por isso usar os métodos chamando a palavra reservada **document**, como o getElementById, getElementsByTagName, getElementsByClassName e assim por diante.

Segue alguns dos **Eventos** mais comuns no JS: mouseover, mouseout, click, dbclick, change, load, entre outros.
