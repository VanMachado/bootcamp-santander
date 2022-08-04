"use strict";
//Exemplo de como o Target funciona, traduzindo para navegadores antigos
const btnTeste = document.getElementById('btn');
btnTeste === null || btnTeste === void 0 ? void 0 : btnTeste.addEventListener('click', () => {
    console.log('Deu certo');
});
