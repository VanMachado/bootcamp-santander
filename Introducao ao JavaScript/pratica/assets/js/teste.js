function numPares (array){
    let  evenNum = [];

    for(let i = 0; i< array.length; i++){
        if(array[i] % 2 ===0){
            evenNum.push(array[i]); //o .push é usado para incluir um item de um array em outro
        } else{
            console.log(`${array[i]} não é par!`);
        }        
    }    

    console.log('Os números pares são: ', evenNum);    
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numPares(array);

//console.log("Hello World!");