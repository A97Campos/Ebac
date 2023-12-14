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