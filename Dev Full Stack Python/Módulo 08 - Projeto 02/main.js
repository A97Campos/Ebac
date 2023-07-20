/*const form = document.getElementById("form");
const inputAtividade = document.getElementById("atividade");
const inputNota = document.getElementById("nota");
let media = parseFloat(prompt('Digite a média:'));
const imgAprovado = '<img src="images/aprovado.png" alt="emoji Aprovado">'
const imgReprovado = '<img src="images/reprovado.png" alt="emoji Reprovado">'
let linhas = '';
let atividade = [];
let nota = [];

form.addEventListener("submit", function(valida){
    valida.preventDefault();

    adicionaLinha();
});

function adicionaLinha (){
    if(atividade.includes(inputAtividade.value)){
        alert(`A atividade ${inputAtividade.value} já foi cadastrada.`)
    }else {
        atividade.push(inputAtividade.value);
        nota.push(parseFloat(nota.value));

        let tabela = '<tr>'
        tabela += `<td>${inputAtividade.value}</td>`
        tabela += `<td>${inputNota.value}</td>`
        tabela += `<td>${inputNota.value >= media ? imgAprovado : imgReprovado}</td>`
        tabela += '</tr>';

        linhas += tabela;
        
        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linhas;

        inputAtividade.value = '';
        inputNota.value = '';
    };    
};

function atualizaMediaFinal(){

}*/

const form = document.getElementById("form");
const inputAtividade = document.getElementById("atividade");
const inputNota = document.getElementById("nota");
const media = parseFloat(prompt('Digite a média:'));
let linhas = "";
let atividade = [];
let nota = [];
const aprovado = '<img src="images/aprovado.png">';
const reprovado = '<img src="images/reprovado.png">';

form.addEventListener("submit", function(valida){
    valida.preventDefault();

    adicionaLinha();
    atualizaMediaFinal();  
});

function adicionaLinha(){

    if(atividade.includes(inputAtividade.value)){
        alert(`A atividade ${inputAtividade.value} já foi inserida.`)
    }else {
        atividade.push(inputAtividade.value);
        nota.push(parseFloat(inputNota.value));

        let linha = "<tr>"
        linha += `<td> ${inputAtividade.value}</td>`
        linha += `<td> ${inputNota.value}</td>`
        linha += `<td> ${inputNota.value >= media ? aprovado : reprovado}</td>`
        linha += "</tr>"

        linhas += linha;

        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linhas;

        inputAtividade.value = "";
        inputNota.value = "";
    }
};

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById("valorMediaFinal").innerHTML = mediaFinal;

}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < nota.length; i++){
        somaDasNotas += nota[i];
    }

    return somaDasNotas / nota.length
}