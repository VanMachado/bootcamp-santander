enum Profissao {
    Professora,
    Desenvolvedora,
    Pintor,
    Atriz
}

interface IPessoa {
    nome: string,
    idade: number,
    profissão?: Profissao
}

interface IEstudante extends IPessoa {
    materias: string[]
}

const pessoa = {
     nome: 'Mariana',
     idade: 29,
     profissao: 'Desenvolvedora'
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
}

const jessica: IEstudante = {
    nome: 'Jessica',
    idade: 25,
    profissão: Profissao.Desenvolvedora,
    materias: ['Calculo',  'Arquitetura de Software']
}

const joy: IPessoa = {
    nome: 'Joyce',
    idade: 33,    
}

function listar(array: string[]) {
    for(const item of array) {
        console.log('-', item);
    }
}

console.log(listar(jessica.materias));