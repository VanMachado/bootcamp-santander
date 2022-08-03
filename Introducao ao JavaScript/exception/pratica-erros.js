const meuArray = [1, 2, 3];
const meuNum = 3;

function validaArray(array, num) {
    if(!array && !num) throw new ReferenceError('Envie os parâmetros');

    if(typeof array !== 'object') throw new TypeError('O array não é um objeto');

    if(typeof num !== 'number') throw new TypeError('Digite um número válido');

    if(array.length !== num) throw new RangeError('O tamanho do array é inválido');

    return array;
}

function tryCatch(array, num) {
    try  {
       return console.log(validaArray(array, num))
    } catch (error) {
        if(error instanceof ReferenceError) {
            console.log('Esse é um erro de ReferenceError');
            // console.log(error.name);
            // console.log(error.stack);
        } else if (error instanceof TypeError){
            console.log('Esse é um erro de TypeError');
            // console.log(error.name);
            // console.log(error.stack);
        } else {
            error === RangeError;
            console.log('Esse é um erro de RageError');
            console.log(error.name);
            console.log(error.stack);
        }
    }
}

tryCatch(meuArray, meuNum);