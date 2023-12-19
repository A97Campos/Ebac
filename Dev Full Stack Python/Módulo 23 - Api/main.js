const cep = document.getElementById('cep');
const pesquisar = document.getElementById('pesquisar');
const endereco = document.getElementById('endereco');

const fetchApi = (value) => {
    const result = fetch(`https://viacep.com.br/ws/${value}/json`)
    .then((res) => res.json())
    .then((data) => {
        return data;
    })
    .catch((erro) => {
        console.log('Cep não encontrado, tente novamente !' + erro.message);
    })
    return result;
}

pesquisar.addEventListener('click', async(event) => {
    event.preventDefault();
    const json = await fetchApi(cep.value);

    if (json){
        const logradouro = json.logradouro;
        const bairro = json.bairro;
        const cidade = json.localidade;
        const estado = json.uf;
        endereco.value = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
    }
})

var cleave = new Cleave('#cep', {
    delimiter: '-',
    blocks: [5, 3],
    numericOnly: true
}); 





/*document.addEventListener('DOMContentLoaded', function(){
    
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