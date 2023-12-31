 /*$(document).ready(function(){

    $("header button").click(function(){
        $("#corpo").slideDown();
    });

    $("#btn-cancelar").click(function(){
        $("#corpo").slideUp();
    });

    $("#btn-enviar").click(function(e){
        e.preventDefault();
        const adicionarImg = $("#url").val();
        const novoItem = $("<li style='display: none'></li>");
        $(`<img src="${adicionarImg}" />`).appendTo(novoItem);
        $(`<div class="legenda">
        <a href="${adicionarImg}" target="_blank">Veja a imagem em tamanho real</a>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn(2000);
        $("#url").val(" ");
    });

    $(form).on('submit', function(e){
        e.preventDefault();
    })*/

    $(document).ready(function(){
        $("header button").click(function(){
            $("#corpo").slideDown();
        });

        $("#btn-cancelar").click(function(){
            $("#corpo").slideUp();
        });

        $("#btn-enviar").click(function(validar){
            validar.preventDefault();
            const url = $("#url").val();
            let novoItem = $("<li style='display: none'> </li>");//o display none é para colocar um efeito fadeIn na imagem.
            $(`<img src="${url}" alt="Ver imagem em tamanho real" >`).appendTo(novoItem);
            $(`<div class="legenda">
                <a href="${url}" target="_blank">Veja a imagem em tamanho real</a>
                </div>`).appendTo(novoItem);
            $(novoItem).appendTo("ul");
            $(novoItem).fadeIn(2000);
            $("#url").val("");
         })
    })