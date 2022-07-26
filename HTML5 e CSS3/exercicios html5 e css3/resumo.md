# HTML5

#### Estrutura básica

- A tag **< html > ** é a raiz do documento, todos os elementos devem estar dentro dela.
- A tag **< head > ** contém os metadados, ou seja, o que é lido pelo navegador.
- A tag  **< body > ** é onde fica os conteúdos visíveis pelo usuário.

 #### Semântica

- **< section >** - uma seção qualquer.
- **< header >** - o cabeçalho da sua página.
- **< article >** - um artigo específico.
- **< aside >** - representado um conteúdo relacionado ao conteúdo principal da página, representado por uma barra lateral
- **< footer >** - o rodapé.
- **< h1 > à < h6 >** -  normatização de títulos

#### Tags

- **< p > < /p >** - serve para referenciar o conteúdo do artigo, podendo conter imagens, código, vídeos e outros conteúdos.
- **< a > < /a>** - é uma âncora, com duas nomenclaturas, **"href"** e **"target"**, sendo o **href** um hyperlink que aponta para emails, telefones, um site entre outros. Já o **target** ele indica como nosso link vai ser aberto.
- **< img > ** não tem tag de fechamento e possui apenas dois atributos próprios, o **src** e **alt**. O **src** é obrigatório e guardo o caminho da imagem, o **alt** melhora a acessibilidade, mostrando a discrição da foto.
- **< ul >** é um elemento do qual a ordem da lista não é importante.
- **< ol >** já nesse, a ordem é importante e eles vem enumerados.
- **< li >** - é um elemento dessa lista.



# CSS3

#### Estrutura básica

É formado por seletores, dos quais possuem uma propriedade e um valor referente a um elemento de HTML. **ID** são representados por '#' e **classes** por '.'

No exercício exemplifiquei como usar alguns atributos de CSS. Segue algumas opções de estilo:

- **solid:** mostra uma borda simples e reta.
- **dotted:** pontilhado.
- **dashed:** faz um hachurado.

#### Estilizando elementos

Utilizando a palavra reservada **border** podemos mudar a cor, o tamanho, estilo de cada lado individualmente. Ex.: **border-top-color** para mudar a cor apenas da borda superior.

Podemos também passar 4 valores para alterar propriedades do elemento, seguindo a ordem, topo, direita, baixo e esquerda.

#### Estilizando textos

Com a palavra reservada **text** podemos alterar sua fonte, para maiúsculo, ou minúsculo, negrito entre outras. Ex.: text-transform: uppercase;

#### Estilizando listas

Existem várias maneiras de personalizar a lista com a palavra reservada **list** para modificar cor, marcador e estilo, por exemplo. Ex.: "list-style-type: circle;" para definir o marcador circular.

#### Dimensão e alinhamento

Uma maneira de centralizar imagens é usando o bloco de comando: 

...	{

​	display: block;

​	margin: 0px auto;

}





