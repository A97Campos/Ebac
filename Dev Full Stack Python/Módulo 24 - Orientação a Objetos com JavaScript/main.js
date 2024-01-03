//Objeto
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

/*console.log(carroDoJoao);
console.log(carroDoAndrew);*/

/* ------------------------ */

//Obejto - função construtora
function Carro(proprietario, modelo, fabricante, anoModelo, anoFabricacao){
    this.proprietario = proprietario;
    this.modelo = modelo; //this faz referncia a function carro.
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log('vrum');
    }
}

const carroDoJoao2 = new Carro ("João", "Fiesta", "Ford", 2021, 2020);
const carroDoAndrew2 = new Carro("Andrew","C4 Cactus", "Citroen", 2022, 2021);

console.log(carroDoJoao2);
console.log(carroDoAndrew2);

/* ------------------------------- */

//Tipos de Dados
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
