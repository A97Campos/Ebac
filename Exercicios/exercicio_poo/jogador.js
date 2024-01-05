function Jogador(nome, time, idade, nacionalidade){
    this.nome = nome;
    this.time = time;
    this.idade = idade;
    this.nacionalidade = nacionalidade;
}

class JogadorFutebol extends Jogador{
    constructor(nome,time,idade,nacionalidade,numeroDeGols, numeroDeAssistencias, cartoesVermelhos, cartoesAmarelos){
        super(nome,time,idade,nacionalidade);
        this.numeroDeGols = numeroDeGols;
        this.numeroDeAssistencias = numeroDeAssistencias;
        this.cartoesVermelhos = cartoesVermelhos;
        this.cartoesAmarelos = cartoesAmarelos;
    }
}

class JogadorVolei extends Jogador {
    constructor(nome, time, idade, nacionalidade,numeroDePontos, qauntidadeDeSaques){
        super(nome,time,idade,nacionalidade);
        this.numeroDePontos = numeroDePontos;
        this.qauntidadeDeSaques = qauntidadeDeSaques;
    }
}


const jogadorFutebol1 = new JogadorFutebol('Cristiano Ronaldo', 'Al-Nassr', 38, 'Português', 53, 20, 1, 0);
const jogadorFutebol2 = new JogadorFutebol('Messi', 'Inter Miami', 36, 'Argentino', 37, 15, 0, 0);
const jogadorVolei1 = new JogadorVolei('Lucarelli', ' Gas Sales Bluenergy Piacenza', 31, 'Brasileiro', 20, 7);

console.log(jogadorFutebol1);
console.log(jogadorFutebol2);
console.log(jogadorVolei1);
