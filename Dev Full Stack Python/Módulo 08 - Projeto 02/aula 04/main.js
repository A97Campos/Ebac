/*const form = document.getElementById("form");
const atividade = document.getElementById("atividade");
const nota = document.getElementById("nota");
let media = parseFloat(prompt("Digite a Média:"));
const aprovado = '<img src="images/aprovado.png">';
const reprovado = '<img src="images/reprovado.png">';
let linhas = '';


form.addEventListener("submit", function(adicionarNota){
    adicionarNota.preventDefault();

    let linha = '<tr>';
    linha += `<td>${atividade.value}</td>`;
    linha += `<td>${nota.value}</td>`;
    linha += `<td>${nota.value >= media ? aprovado : reprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;

    atividade.value = ''
    nota.value = ''
});*/


const form = document.getElementById("form");
const inputAtividade = document.getElementById("atividade");
const inputNota = document.getElementById("nota");
let linhas = "";
const imgAprovado = '<img src="images/aprovado.png" alt="emoji aprovado">';
const imgReprovado = '<img src="images/reprovado.png" alt="emoji reprovado">';
let media = parseFloat(prompt("Digite a media:"));
let atividade = [];
let nota = [];
const spanAprovado = '<span  class="aprovado">Aprovado</span>'
const spanReprovado = '<span  class="reprovado">Reprovado</span>'

form.addEventListener("submit", function(valida){
    valida.preventDefault();

   adicionarLinha();
   atualizaTabela();
   atualizaMediaFinal();
});

function adicionarLinha() {
    

    if(atividade.includes(inputAtividade.value)){
        alert(`A atividade ${inputAtividade.value}, já foi incluida.`)
    }else {
        atividade.push(inputAtividade.value);
        nota.push(parseFloat(inputNota.value));
        
        let linha = "<tr>"
        linha += `<td> ${inputAtividade.value}</td>`
        linha += `<td> ${inputNota.value}</td>`
        linha += `<td> ${inputNota.value >= media ? imgAprovado : imgReprovado} </td>`
        linha += `</tr>`;

        linhas += linha;
    }    

    inputAtividade.value = "";
    inputNota.value = "";
};

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
};

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById("mediaFinalValor").innerHTML = mediaFinal;
    document.getElementById("mediaFinalResultado").innerHTML = mediaFinal >= media ? spanAprovado : spanReprovado;
};

function calculaMediaFinal(){
    let somaDasNotas = 0

    for(let i = 0; i < nota.length; i++){
        somaDasNotas += nota[i];
    }

    return somaDasNotas / nota.length;
};