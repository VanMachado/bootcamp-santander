function exponecial(array, num = 1){	
    let resultado = [];

  	for(let i = 0; i < array.length; i++){
    	resultado.push(array[i] ** num);        
    }

    return resultado;	
}

function findMax () {    
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){            
            max = arguments[i];                 
        }                
    }    

    console.log(`Esse é o maior número : ${max}`);
}

const user = {
    id: 42,
    fullname : {
        firstName: 'Sr',
        lastName: 'Batata'
    }
    
}   
    function userId ({id}) {
        console.log(`Essa é a ID: ${id}`);    
    }
    
    
    
    function nomeCompleto ({fullname: {firstName: first, lastName: last }}) {
        console.log(`${first} ${last}`);    
    } 
    
function letras(nome) {
    for(letras of nome){
        console.log(letras);
    }
}

function cont(numeros) {
    for(number of numeros){
        console.log(number);
    }
}

function atributoObjeto(obj) {
    for(card in obj){
        console.log(card);
    }
}

function valorObjeto(obj) {
    for(prop in obj){
        console.log(obj[prop]);        
    }
}

const meuObjeto = {
    nome: "Van",
    idade: 30,
    cidade: "Curitiba"
}

function usoThis () {
    console.log(this.nome);
}

const numerosArray = [1, 2, 3, 4];
const palavra = "abacaxi";

console.log(exponecial(numerosArray, 4));
findMax(7, 34, 90, 45);
userId (user);
nomeCompleto (user);
letras(palavra);
cont(numerosArray);
atributoObjeto(meuObjeto);
valorObjeto(meuObjeto);
usoThis.call(meuObjeto);