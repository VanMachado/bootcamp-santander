//Types
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    console.log('Digitei');
    const i = event.currentTarget as HTMLInputElement;

    console.log(i.value);
});

//Generic Types
function adicionaLista<T>(array: any[], valor: T) {
    return array.map(item => item + valor);
}

adicionaLista([1,2,3,4], 2);