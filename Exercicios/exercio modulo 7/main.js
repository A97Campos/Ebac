const form = document.getElementById("form")

form.addEventListener("submit", function(valida){
    valida.preventDefault()

    const campoA = document.getElementById("campoA");
    let campoAValida = campoA.value;

    const campoB = document.getElementById("campoB");
    let campoBValida = campoB.value

if(campoBValida > campoAValida){
    document.getElementById("resposta").innerHTML = `Seu formulário está válido, o campo A é ${campoA.value}, e o campo B é ${campoBValida}.`;
    document.getElementById("resposta").style.backgroundColor = "green";
    campoA.value = " ";
    campoB.value = " ";
}else {
    document.getElementById("resposta").innerHTML = `Seu formulário está inválido, o campo A é ${campoA.value}, e o campo B é ${campoBValida}.`
    document.getElementById("resposta").style.backgroundColor = "red";
    campoA.value = " ";
    campoB.value = " ";
}

})