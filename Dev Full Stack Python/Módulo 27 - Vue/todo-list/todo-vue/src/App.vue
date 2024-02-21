<script setup>
import { reactive } from 'vue';


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
    <h1>Minhas tarefas</h1>
    <p>voce possui {{ getTarefasPendentes().length }} tarefas pendentes</p>
  </header>
  <main>
    <form @submit.prevent="cadastraTarefa">
      <input :value="estado.tarefaTemp" @change="evento => estado.tarefaTemp = evento.target.value" type="text" placeholder="Digite aqui a tarefa" required>
      <button type="submit">Cadastrar</button>
      <select @change="evento => estado.filtro = evento.target.value">
        <option value="todas">Todas as tarefas</option>
        <option value="pendentes">Pendentes</option>
        <option value="finalizadas">Finalizadas</option>
      </select>
    </form>

    <section>
      <ul>
        <li v-for="tarefa in getTarefasFiltradas()">
          <input @change="evento => tarefa.finalizada = evento.target.checked" :checked="tarefa.finalizada" :id="tarefa.titulo" type="checkbox" >
          <label :class="{done: tarefa.finalizada}" :for="tarefa.titulo">{{ tarefa.titulo }}</label>
        </li>
      </ul>
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

form input, form select {
  display: block;
  width: 90vw;
  padding: 8px;
  margin-top: 16px;
  border-radius: 5px;
  border: 2px solid rgb(218, 215, 215);
}

button {
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  margin-top: 16px;
  background-color: rgb(71, 71, 240);
  color: #fff;
  border: none;
  outline: none;
}

section {
  margin-top: 16px;
}

section ul li{
  border: 2px solid rgb(218, 215, 215);
  border-radius: 5px;
  padding: 8px;
}

section ul li input {
  margin-right: 8px;
}

.done {
  text-decoration: line-through;
}
</style>
