"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldo = 0;
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldo += soma;
        campoSaldo.innerHTML = saldo.toString();
        limparSoma();
    }
}
function limparSoma() {
    soma.value = '';
}
function limparSaldo() {
    if (campoSaldo) {
        saldo = 0.00;
        campoSaldo.innerHTML = saldo.toString();
        return `R$ ${campoSaldo.innerHTML}`;
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
limparSaldo();
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
