const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function(){
        console.log('vrum');
    }
}

const carroDoAndrew = {
    modelo: 'C4 Cactus',
    fabricante: 'Citroen',
    anoModelo: 2022,
    anoFabricacao: 2021,
    acelerar: function(){
        console.log('vrum');
    }
}

function carro(modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log('vrum');
    }
}

console.log(carroDoJoao);
console.log(carroDoAndrew);

const carrodoFulano = new carro('Onix', 'Gm', 2020, 2019);

console.log(carrodoFulano);

const nome = 'Andrew';
const idade = 26;
const MaiorDeIdade = true;
const conhecimento = ['html', 'css', 'javascript'];

const pessoa = {
    nome: nome,
    idade: idade,
    MaiorDeIdade: MaiorDeIdade,
    conhecimento: conhecimento,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof MaiorDeIdade);
console.log(typeof conhecimento);
