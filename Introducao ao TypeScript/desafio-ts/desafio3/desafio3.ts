//DICA: Quando quiser trabalhar com elementos que so recebem string, como o caso de um 'SPAM'
//em vez de transforma a string em numero, com o parseInt(), ou parseFloat()
//crie uma variável com o tipo desejado e após fazer as chamadas de funções
//transforme ela com o toString() para incormporar no innerHTML!!!

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo = 0;

function somarAoSaldo(soma: number) {   
    if(campoSaldo) {
        saldo += soma;
        campoSaldo.innerHTML = saldo.toString();
        limparSoma();
    }
}

function limparSoma() {
    soma.value = '';
}

function limparSaldo() {
   if(campoSaldo) {
    saldo = 0.00;
    campoSaldo.innerHTML = saldo.toString();
    return `R$ ${campoSaldo.innerHTML}`;
   }
}

botaoAtualizar?.addEventListener('click', () => {    
    somarAoSaldo(Number(soma.value));    
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

limparSaldo();

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */