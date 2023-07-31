$(document).ready(function(){
    $("#btn-enviar").click(function(){
        let adicionarTarefa = $("#adicionar-tarefa").val().trim();
        if (adicionarTarefa !== ""){
            let novoItem = `<li>${adicionarTarefa}</li>`
            $(novoItem).appendTo("#lista");
            $("#adicionar-tarefa").val("")
        }
        $("li").click(function(){
            $(this).toggleClass("add-riscado");
        })
        
    })
})


/*const form = document.querySelector("form")
const adicionarTarefa = document.getElementById("adicionar-tarefa");
let linhas = "";
let corpo = document.getElementById("lista");
let objLista = [];

form.addEventListener("submit", function(valida){
    valida.preventDefault();

    objLista.push(linhas);

    let linha = "<ul>"
    linha += `<li>${adicionarTarefa.value}</li>`
    linha += "</ul>"

    linhas += linha;    

    corpo.innerHTML = linhas;

    adicionarTarefa.value = "";
});

corpo.addEventListener("click", function(){
    let listaO = document.querySelector("li");

    listaO.style.textDecoration = "line-through";
    
})*/

