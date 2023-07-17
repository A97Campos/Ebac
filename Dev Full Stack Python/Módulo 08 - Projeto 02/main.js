const form = document.getElementById("form");
const atividade = document.getElementById("atividade")
const nota = document.getElementById("nota")


form.addEventListener("submit", function(adicionarNota){
    adicionarNota.preventDefault();
    
    alert(`Atividade ${atividade.value} - Nota: ${nota.value}`)
});