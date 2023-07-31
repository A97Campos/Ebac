$(document).ready(function(){

    $("#cadastrar").click(function(valida){
        valida.preventDefault();
        let addNota = $("#adicionar-nota").val();

        if (addNota !== ""){
            let novoItem = $(`<li>${addNota}</li>`);
            $("#lista").append(novoItem);    
            $("#adicionar-nota").val("");
        }

        $("li").click(function(){
            $(this).css("text-decoration", "line-through");
        })  
        
        $("li").dblclick(function(){
            $(this).css("text-decoration", "none")
        })
    });

    
});