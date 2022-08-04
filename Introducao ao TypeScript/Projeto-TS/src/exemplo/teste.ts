const btn = document.getElementById('btn');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumeros(num1: number, num2: number, devPrintar: boolean, frase: string) {
    if(devPrintar) {
        console.log(`${frase} ${num1 + num2}`);
    }

    return num1 + num2;
}

let devPrintar = true;
const frase = 'O valor é: ';

if(btn) {
    btn.addEventListener('click', () => {
        if(input1 && input2){
            adicionarNumeros(Number(input1.value), Number(input2.value), devPrintar, frase);
        }
    });
}