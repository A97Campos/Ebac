document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('pesquisar').addEventListener('click', function(){
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint = `viacep.com.br/ws/${cep}/json/`;

        xhttp.open('GET', endpoint);
        xhttp.send();
    })

    var cleave = new Cleave('#cep', {
        delimiter: '-',
        blocks: [5, 3],
        numericOnly: true
    });    
})

/*$(document).ready(function(){
    $('#pesquisar').click(function(){
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        
        fetch(endpoint)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
        })
        $('#formulario-pedido').submit(function(evento) {
            evento.preventDefault();
        
            if($('#nome').val().length == 0) {
                throw new error('Digite o nome');
            }
        })
    })
})
*/