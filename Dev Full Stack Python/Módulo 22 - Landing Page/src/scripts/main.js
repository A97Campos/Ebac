AOS.init();

const dataDoEvento = new Date('Dec 23, 2023 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoParaEvento = timeStampDoEvento - timeStampAtual;

    const segundos = 1000
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const diasAteOEvento = Math.floor(tempoParaEvento / dias);
    const horasAteOEvento = Math.floor((tempoParaEvento % dias) / horas);
    const minutosAteOEvento = Math.floor((tempoParaEvento % horas) / minutos);
    const segundosAteOEvento = Math.floor((tempoParaEvento % minutos) / segundos);

    const contador = document.getElementById('contador');

    contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (tempoParaEvento < 0){
        clearInterval(contaHoras);
        contador.innerHTML = "Evento Expirado.";
        contador.style.color = "red";
    };

}, 1000);