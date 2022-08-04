"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Desenvolvedora"] = 1] = "Desenvolvedora";
    Profissao[Profissao["Pintor"] = 2] = "Pintor";
    Profissao[Profissao["Atriz"] = 3] = "Atriz";
})(Profissao || (Profissao = {}));
const pessoa = {
    nome: 'Mariana',
    idade: 29,
    profissao: 'Desenvolvedora'
};
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
};
const jessica = {
    nome: 'Jessica',
    idade: 25,
    profissão: Profissao.Desenvolvedora,
    materias: ['Calculo', 'Arquitetura de Software']
};
const joy = {
    nome: 'Joyce',
    idade: 33,
};
function listar(array) {
    for (const item of array) {
        console.log('-', item);
    }
}
console.log(listar(jessica.materias));
