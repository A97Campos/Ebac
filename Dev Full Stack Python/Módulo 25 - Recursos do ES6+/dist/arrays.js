"use strict";

var RedesSociais = ["Facebook", "Instagram", "X", "Linkedin"];
for (var i = 0; i < RedesSociais.length; i++) {
  console.log("Eu tenho perfil na Rede Social: ".concat(RedesSociais[i]));
} // ou pode ser 
RedesSociais.forEach(function (nomeDaRede, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na Rede Social: ").concat(nomeDaRede));
});
console.log('Olá mundo');

//map
var alunos = ["Andrew", "Milena", "Lorenzo", "Carlos", "Adriana"];
var alunos2 = alunos.map(function (nomeDoAluno) {
  nomeDoAluno = {
    nome: nomeDoAluno,
    curso: 'FrontEnd'
  };
  return nomeDoAluno;
});
console.log(alunos2);

//find
var andrew = alunos2.find(function (item) {
  return item.nome == 'Andrew';
});
console.log(andrew);
var indiceDoAndrew = alunos2.findIndex(function (item) {
  return item.nome == 'Andrew';
});
console.log(indiceDoAndrew);

//every
alunos2.push({
  nome: 'Fulano',
  curso: 'BackEnd'
});
var todosOsAlunosSaoFrotnEnd = alunos2.every(function (item) {
  return item.curso == 'FrontEnd';
});
console.log(todosOsAlunosSaoFrotnEnd);