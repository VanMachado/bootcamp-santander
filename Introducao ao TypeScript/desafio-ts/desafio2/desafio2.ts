// Como podemos melhorar o esse código usando TS? 
interface IHumano {
    nome: string,
    idade: number
    Profissao: Profissao
}

enum Profissao {
    Atriz,
    Padeiro
}


let pessoa1: IHumano = {    
    nome: "maria",
    idade: 29,
    Profissao: Profissao.Atriz
}

let pessoa2: IHumano = {
    nome: "roberto",
    idade: 19,
    Profissao: Profissao.Padeiro
}

let pessoa3 = {
    nome: "laura",
    idade: "32",
    Profissao: Profissao.Atriz
};

let pessoa4: IHumano = {
    nome: "carlos",
    idade: 19,
    Profissao: Profissao.Padeiro
}