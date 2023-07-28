$(document).ready(function(){

    $("#cadastrar").click(function(valida){
        valida.preventDefault();
        const addNota = $("#adicionar-nota").val();
        let novoItem = $("<li></li>");
        $(addNota).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $("#adicionar-nota").val("");
    });
});