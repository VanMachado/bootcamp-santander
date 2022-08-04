"use strict";
const btn = document.getElementById('btn');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
function adicionarNumeros(num1, num2, devPrintar, frase) {
    if (devPrintar) {
        console.log(`${frase} ${num1 + num2}`);
    }
    return num1 + num2;
}
let devPrintar = true;
const frase = 'O valor é: ';
if (btn) {
    btn.addEventListener('click', () => {
        if (input1 && input2) {
            adicionarNumeros(Number(input1.value), Number(input2.value), devPrintar, frase);
        }
    });
}
