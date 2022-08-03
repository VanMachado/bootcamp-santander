const lista = [0, 2, 57, 86, 121, 12];

function filtroPar(array) {
    return array.filter(function(item) {
        if(item % 2 === 0){
            return item;
        }
    });
}

console.log(filtroPar(lista));