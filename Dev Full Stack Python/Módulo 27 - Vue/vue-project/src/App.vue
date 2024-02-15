<script setup>
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

</script>

<template>
  <h1>Olá mundo</h1>
  <h2>{{ nome }}</h2>
  <h3>{{ profissao.profissao }}</h3>
  <h4>{{ dizOi("Lorenzo") }}</h4>
  <img :src="imagem" alt="img">

  <h1 v-if="estaAutorizado">Bem vindo</h1>
  <h1 v-else>Não esta autorizado</h1>
</template>

<style scoped>
</style>
