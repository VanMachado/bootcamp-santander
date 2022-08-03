const pessoa1 = {
    nome: "Pedrinho",
    idade: 5
}

const pessoa2 = {
    nome: "Marinhazinha",
    idade: 8
}

const animal = {
    nome: "Dagoberto",
    idade: 2,
    raca: "doguinho"
}

function calculaIdade (anos){
    
    if(this.raca != null && (this.idade+ anos) > 15) {
        console.log("Infelizmente o pet não está aqui...")
    } else {
        console.log(`Daqui à ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade`);   
    }
}

calculaIdade.call(animal, 27);