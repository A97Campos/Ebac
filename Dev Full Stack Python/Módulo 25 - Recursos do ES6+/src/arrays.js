const RedesSociais = ["Facebook", "Instagram", "X", "Linkedin"];

for(let i = 0; i < RedesSociais.length; i++){
    console.log(`Eu tenho perfil na Rede Social: ${RedesSociais[i]}`)
} // ou pode ser 
RedesSociais.forEach(function(nomeDaRede, indice){
    console.log(`#${indice} Eu tenho perfil na Rede Social: ${nomeDaRede}`)
})
console.log('Olá mundo')


//map
const alunos = ["Andrew", "Milena", "Lorenzo", "Carlos", "Adriana"];

const alunos2 = alunos.map(function(nomeDoAluno){
    nomeDoAluno = {
        nome: nomeDoAluno,
        curso: 'FrontEnd'
    }
    return nomeDoAluno;
})
console.log(alunos2);


//find
const andrew = alunos2.find(function(item){
    return item.nome == 'Andrew';
})
console.log(andrew);
const indiceDoAndrew = alunos2.findIndex(function(item){
    return item.nome == 'Andrew';
})
console.log(indiceDoAndrew);


//every
alunos2.push ({
    nome: 'Fulano',
    curso: 'BackEnd'
});
const todosOsAlunosSaoFrotnEnd = alunos2.every(function(item){
    return item.curso == 'FrontEnd'
})
console.log(todosOsAlunosSaoFrotnEnd);