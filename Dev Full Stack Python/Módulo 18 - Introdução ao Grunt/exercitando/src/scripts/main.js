document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("form-sorteador").addEventListener("submit", function(evento){
        evento.preventDefault();
        let numero = document.getElementById("numero").value;
        numero = parseInt(numero);

        let numeroAleatorio = Math.floor(Math.random() * numero);
        let ValorResultaddo = document.getElementById("valorResultado").innerHTML = numeroAleatorio;
        const resultado = document.getElementById("resultado").style.display = "block";
    })
})