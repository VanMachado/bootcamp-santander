const nome = 'abacaxi';

const nada = '';

function verifica(string){
    if(!string) {
        throw "Entrada invalida";
    } else {
        return "Tudo certo!";
    }
}

console.log(verifica(nada));