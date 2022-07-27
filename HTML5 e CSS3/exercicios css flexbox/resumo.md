# CSS Flexbox

#### Introdução ao Flex Box

Foi pensado como modelo de layout unidimensional. O flex container é a tag que envolve os itens, nela será aplicado o "display:flex". Transformando todos os itens filhos em flex itens.

O Flex Container possui algumas propriedades intrínsecas, como:

- **display**
- **flex-direction**
- **flex-wrap**
- **Entre outras**

Já os Flex Item são os filhos diretos dos Flex Container podendo assumir o papel de um. Algumas propriedades do Flex Item:

- **flex-grow**
- **flex-basis**
- **flex-shrink**

#### Estrutura básica do display flex

Podemos incluir o elemento **< style >** no **< head >**, definindo as classes e atributos normalmente, podendo usar normalmente em outros elementos no **< body >**. O **flex container** é muito utilizado na responsividade.

- **Flex direction** - Principal função é manipular a orientação horizontal dos elementos. Alguns exemplos de manipulação é o row (esquerda para a direita), row-reverse, column (de cima para baixo) e column-reverse

- **Flex wrap** - Define se os itens devem ou não quebrar a linha. Por padrão, eles não quebram a linha, causando o vazamento dos itens em alguns casos.

- **Flex flow** - funciona como um atalho para o **flex-direction** e **flex-row**. 

- **Justify Content** - responsável por alinhar os itens dentro dos containers, de acordo com a direção estabelecida. Não se aplica a itens que ocupam 100% do container. Alguns de seus atributos são: **flex-start**, **flex-end**, **center**, **space-between** e **space-around**.

- **Align  items** -  trata do alinhamento dos flex itens de acordo com o eixo do container, sendo diferente para alinhamentos verticais e horizontais. Algum de seus atributos: **center**, **stretch**, **flex-start**, **flex-end** e **basline**.

- **Align content** - trata da organização do eixo vertical dos containers. Tem as mesmas propriedades do **justify content e align items** aplicada a seu contexto.

  

## 

