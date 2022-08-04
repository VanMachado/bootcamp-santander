"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    Profissao: Profissao.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    Profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: "32",
    Profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    Profissao: Profissao.Padeiro
};
