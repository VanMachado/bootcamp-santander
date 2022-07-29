# Anotações sobre Git e GitHub

###  **Comandos básicos de CLI**     

- cd .. - volta para  pasta anterior
- cd  "nomeDaPasta" - navega para pasta em questão
- dir - lista todos  os diretórios da pasta selecionada
- mkdir - cria um  diretório na pasta selecionada
- cls - limpa o  terminal     
- echo  "algo" - printa no terminal o que foi passado como comando     
- echo  "algo" > "algumaCoisa.arquivo" - cria o arquivo com o  "algo" caso não exista. Ex.: c:\workspace\ echo hello >  hello.txt     
- del  "diretório" - deleta o que está dentro da pasta especificada. Ex.:  C:\> del workspace     rmdir  "diretório" - deleta o diretório     
- git config  --global user.email "email"     
- git config  --global user.name "nomeDeUsuario"     
- git config  --global --unset user.email/user.name - limpa as configurações descritas  

###  **Instalação de Git**     

Caso dê algum erro  na hora dos "pushs" e "pulls" voltar na aula  "Realizando a instalação do GIT" no módulo 2     

**Funcionamento do Git**     Com o comando  openssl sha1 "nome e tipo do arquivo" você obtem a chave  criptografada do arquivo. Ajuda a  saber se o arquivo sofreu modificações e a garantir que um determinado  arquivo é de fato o que procuramos.     

**Objetos internos do Git**     São eles os **Blobs, Trees e Commits** responsáveis pelo  versionamento.     

- **Blob** - vai ter o tipo do objeto, o tamanho  com um \0 "conteúdo", gerando metadados.     
- **Tree -** armazena blobs e podem apontar para  outras árvores também.     
- **Commit -** explica as alterações e estado dos  arquivos, apontando autor, conteúdo e onde está armazenado.  

  ### **Criar uma chave SSH**  

- **ssh-keygen -t ed25519 -C** "email"

- **eval $(ssh-agent -s**)     
- **ssh add** "caminhoDaPasta", caso já  esteja na pasta, so passar a chave direto.  

  ### **Processo de versionamento no Git**    

- **Git Init -** Inicia um repositório do git na  pasta selecionada     
- **Git add /nomeDoArquivo.tipo -** Adiciona um  arquivo ao repositório     
- **Git commit -m   "mensagem" -** Adiciona um comentário ao repositório    
- **Git status -**  informa o status dos arquivos em relação aos  arquivos já adicionados 
- **Git push origin 'master'** - atualiza o repositório remoto de acordo com o local
- **Git pull** - atualiza o repositório local de acordo com o remoto
- **Git remote add origin "url do repositório"** - adiciona o endereço para o qual o repositório local aponta.
