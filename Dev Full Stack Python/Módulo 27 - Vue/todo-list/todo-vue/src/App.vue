<script setup>
import { reactive } from 'vue';
import cabecalho from './components/cabecalho.vue';
import formulario from './components/formulario.vue';
import listaDeTarefas from './components/listaDeTarefas.vue';


const estado = reactive({
  filtro: 'filtro',
  tarefaTemp: '',
  tarefas: [
    {
      titulo: 'Estudar ES6',
      finalizada: true,
    },
    {
      titulo: 'Estudar Vue.Js',
      finalizada: false,
    },
    {
      titulo: 'Ir para a academia',
      finalizada: false,
    },
    {
      titulo: 'Estudar Engenharia de dados',
      finalizada: true,
    }
  ]
});

const getTarefasFinalizadas = () => {
  return estado.tarefas.filter(tarefa => tarefa.finalizada)
}

const getTarefasPendentes = () => {
  return estado.tarefas.filter(tarefa => !tarefa.finalizada)
}

const getTarefasFiltradas = () => {
  const filtro = estado.filtro;

  switch (filtro) {
    case 'finalizadas':
      return getTarefasFinalizadas();
    case 'pendentes':
      return getTarefasPendentes();
    default:
      return estado.tarefas;
  }  
}

const cadastraTarefa = () => {
  const tarefaNova = {
    titulo: estado.tarefaTemp ,
    finalizada: false,
  };

  estado.tarefas.push(tarefaNova);
  estado.tarefaTemp = '';
}

</script>

<template>
  <header>
    <!--Cabeçalho-->
    <cabecalho :tarefas-pendentes="getTarefasPendentes().length" />
  </header>
  <main>
    <!--Formulário-->
    <formulario :trocar-filtro="evento => estado.filtro = evento.target.value" :tarefa-temp="estado.tarefaTemp" :edita-tarefa-temp="evento => estado.tarefaTemp = evento.target.value" :cadastra-tarefa="cadastraTarefa"/>
    <section>
      <!--Lista de Tarefas-->
      <listaDeTarefas :tarefas="getTarefasFiltradas()"/>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

header {
  background-color: rgb(203, 203, 236);
  padding: 40px;
}

section {
  margin-top: 16px;
}
</style>
