const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

const nums = [1, 2, 3, 4];

function mapComThis(array, thisArg) {
    return array.map(function(item){
        return item * this.value;
    }, thisArg);
}

function mapSemThis(array) {
    return array.map(function(item) {
        return item *2;
    });
}

console.log(mapComThis(nums, laranja));

console.log(mapSemThis(nums));