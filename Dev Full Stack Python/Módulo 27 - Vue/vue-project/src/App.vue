<script setup>
import { reactive } from 'vue';

const nome = "Andrew";
const profissao = {
  nome: "Andrew",
  profissao: "Programador"
};
function dizOi(nome){
  return `${nome} diz Oi`
}

const imagem = "https://upload.wikimedia.org/wikipedia/pt/8/8d/Batman_por_Jim_Lee.jpg";

const estaAutorizado = false;

const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['Andrew', 'Milena', 'Lorenzo', 'Roseane'],
  inserirNome: '',
})
function aumentar(){
  estado.contador++
};
function diminuir(){
  estado.contador--
}

function alterarEmail(evento){
  estado.email = evento.target.value
}

function mostraSaldoFuturo(){
  return estado.saldo - estado.transferindo
/* OU
  const {saldo, transferindo} = estado;
  return saldo - transferindo
*/
}

function validaTransferencia(){
  const {saldo, transferindo} = estado;
  return saldo < transferindo
}

function AdicionarNome() {
  if(estado.inserirNome.length >= 3){
    estado.nomes.push(estado.inserirNome);
  } else {
    alert('Minimo de 3 caracteres')
  }
document.getElementById('limpar').value = '';
}

</script>

<template>
  <h1>Olá mundo</h1>
  <h2>{{ nome }}</h2>
  <h3>{{ profissao.profissao }}</h3>
  <h4>{{ dizOi("Lorenzo") }}</h4>
  <img :src="imagem" alt="img">

  <h1 v-if="estaAutorizado">Bem vindo</h1>
  <h1 v-else>Não esta autorizado</h1>
  
  <hr>

  <p>{{ estado.contador }} <button @click="aumentar" type="button">+</button>
  <button @click="diminuir" type="button">-</button></p>

  <p>{{ estado.email }}</p>
  <input @keyup="alterarEmail" type="email">

  <p>Saldo: {{ estado.saldo }}</p>
  <p>Transferindo:{{ estado.transferindo }}</p>
  <p>saldo depois da transferência: {{ mostraSaldoFuturo() }}</p>
  <input :class="{invalido: validaTransferencia()}" @keyup="evento => estado.transferindo = evento.target.value" type="text" placeholder="Quantia para transferir">
  <button type="button" v-if="!validaTransferencia()">Transferir</button>
  <button type="button" v-else="validaTransferencia()" disabled>Valor maior que o saldo</button>

  <ul>
    <li v-for="nome in estado.nomes">{{ nome }}</li>
  </ul>
  <input type="text" placeholder="Digite o nome" @keyup="evento => estado.inserirNome = evento.target.value" id="limpar">
  <button type="button" @click="AdicionarNome">Adicionar nome</button>
</template>

<style scoped>

.invalido {
  outline-color: red;
  border-color: red;
}
</style>
