$(document).ready(function(){
    $("#carrosel").slick({
        autoplay: true,
    });

    $(".material-symbols-outlined").click(function(){
        $("#menu-responsivo").slideToggle();
    })

    $("#tel").mask("(00) 0 0000-0000", {placeholder: "(00) 0 0000-0000"});

    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            tel: {
                required: true,
            }
        },
        messages: {
            nome: "Por favor, insira seu nome.",
            email: "Insira seu email."
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

   /* $("#sobre-carro button").click(function(){
        const destino = $("#contatos");
        const nomeVeiculo = $(this).parent().find("h3").text();

        $("#veiculo").val(nomeVeiculo);

        $("html").animate({
            scrollTop: destino.offset().top}, 1000)
    })*/

    $("#sobre-carro button").click(function(){
        const destino = $("#contatos");
        const nomeVeiculo = $(this).parent().find("h3").text();

        $("#veiculo").val(nomeVeiculo);

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})