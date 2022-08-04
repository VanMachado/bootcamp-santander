"use strict";
//Posso adicionar um retorno para a função tbmm, assegurando o resulta no formato que quero
function soma(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return `${input1.toString()} ${input2.toString()}`;
    }
    return input1 + input2;
}
function somaCallback(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(num) {
    return num * num;
}
console.log(somaCallback(1, 2, aoQuadrado));
console.log(soma(1, 5));
console.log(soma('Olá,', 'tudo bem?'));
console.log(soma('Olá', 5));
