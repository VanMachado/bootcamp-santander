const numeros = [1, 2, 3, 4];

const lista = [
    {
        nome: 'toalha',
        preco: 15, 
    },
    {
        nome: 'banana',
        preco: 22,
    }, 
    {
        nome: 'camisa',
        preco: 35,
    },
    {
        nome: 'bola',
        preco:  9,
    },
]

function somaNumeros(array) {
    return array.reduce(function(prev, current) {
        return prev + current;
    });
}

function saldoDisponivel(array, saldo) {
    return array.reduce(function(prev, current) {                
        return prev - current.preco;
    }, saldo);
}

console.log(somaNumeros(numeros));

console.log(saldoDisponivel(lista, 250));