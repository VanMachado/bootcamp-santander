const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array) {
    let novoSet = new Set (array);
    
    return [...novoSet];
}

console.log(valoresUnicos(meuArray));