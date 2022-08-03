const nome = 'abacaxi';

const nada = '';

function verifica(string){
    if(!string) {
        throw "Entrada invalida";
    } else {
        return "Tudo certo!";
    }
}

function tryCatchExe (string){
    try {
        verifica(string)
    } catch (error) {
        console.log(error)
    }
    finally {
        console.log('A frase enviada foi: ' + string);
    }    
}    

console.log(verifica(nome));

tryCatchExe(nada);