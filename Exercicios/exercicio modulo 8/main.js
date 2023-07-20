const form = document.querySelector("form");
let inputNome = document.getElementById("inputNome");
let inputTelefone = document.getElementById("inputTelefone");
const corpoTabela = document.querySelector("tbody")
let linhas = "";
let nomes = [];
let numeros = [];
const erro = document.getElementById("erro");

form.addEventListener("submit", function(valida){
    valida.preventDefault();
    
    adicionaLinha();
});

function adicionaLinha() {
    if(nomes.includes(inputNome.value)) {
        erro.innerHTML = "O nome de contato já está sendo utilizado"
    }else if(numeros.includes(parseInt(inputTelefone.value))) {
        erro.innerHTML = "O número de telefone adicionado já está sendo utilizado."
    } else {
        nomes.push(inputNome.value);
        numeros.push(parseInt(inputTelefone.value));

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${parseInt(inputTelefone.value)}</td>`
        linha += '</tr>';

        linhas += linha

        corpoTabela.innerHTML = linhas;

        erro.innerHTML = " "
        inputNome.value = "";
        inputTelefone.value = "";   
    }    
};