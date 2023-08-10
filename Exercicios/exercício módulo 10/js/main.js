$(document).ready(function(){

        $("#telefone").mask("(00) 0 0000-0000");
        $("#cpf").mask("000.000.000-00");
        $("#cep").mask("00000-000");

        $("form").validate({
            rules: {
                telefone: { required: true,},
                cpf: { required:true,},
                cep: { required: true,}
            },
            messages: {
                telefone: "<p>O campo telefone é necessário</p>",
                cpf: "<p>O campo cpf é necessário</p>",
                cep: "<p>O campo cep é necessário</p>",
            }         
        })
})