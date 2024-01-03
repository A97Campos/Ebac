function PaisJogador(nacionalidade) {
    this.nacionalidade = nacionalidade;
}

function IdadeJogador(idade){
    this.idade = idade;
}

function Jogador(nome, time, idade, nacionalidade){
    this.nome = nome;
    this.time = time;
    PaisJogador.call(this, nacionalidade);
    IdadeJogador.call(this, idade);
}

const jogador1 = new Jogador('Cristiano Ronaldo', 'Al-Nassr', 38, 'Portugal');
const jogador2 = new Jogador('Messi', 'Inter Miami', 36, 'Argentina');
const jogador3 = new Jogador('Neymar', 'Al-Hilal', 31, 'Brasil');

console.log(jogador1);
console.log(jogador2);
console.log(jogador3);
