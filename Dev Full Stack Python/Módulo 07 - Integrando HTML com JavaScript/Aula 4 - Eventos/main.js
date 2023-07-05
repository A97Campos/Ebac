/*const form = document.getElementById("formDeposito");

function validaNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.split(" ");
    return nomeComArray.length >= 2;
}

form.addEventListener("submit", function(valida){
    let formValida;
    valida.preventDefault();

    const nome = document.getElementById("nome");
    const numeroDaConta = document.getElementById("numeroDaConta");
    const valor = document.getElementById("valor");
    const mensagemSucesso = `O valor de ${valor.value}, foi depositado na conta de ${nome.value} - ${numeroDaConta.value}.`

    formValida = validaNome(nome.value);
    if(formValida){
        //alert(mensagemSucesso);
        document.getElementById("demo").innerHTML = mensagemSucesso

        nome.value = (" ");
        numeroDaConta.value = (" ");
        valor.value = (" ");
    } else {
        //alert("O nome digitado esta incorreto")
        document.getElementById("incorreto").style.display = "block";
        document.getElementById("nome").style.border = "1px solid red";
    }
})*/

const form = document.getElementById("formDeposito");

function validaNome(paraValidar){
    const nomeComArray = paraValidar.split(" ");
    return nomeComArray.length >= 2;
}

form.addEventListener("submit", function(valida){
    valida.preventDefault()

    const nome = document.getElementById("nome");
    const numeroDaConta = document.getElementById("numeroDaConta");
    const valor = document.getElementById("valor");
    const mensagemSucesso = `O valor de ${valor.value} foi depositado na conta de ${nome.value} - ${numeroDaConta.value}`;

    let formValida = validaNome(nome.value);

    if(formValida){
        document.getElementById("demo").innerHTML = mensagemSucesso
    } else {
        document.getElementById("incorreto").style.display = "block"
    }
})