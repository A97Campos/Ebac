<script setup>
    const props = defineProps(['cadastraTarefa', 'tarefaTemp', 'trocarFiltro', 'editaTarefaTemp'])
</script>

<template>
    <form @submit.prevent="props.cadastraTarefa">
        <!--@submit.prevent="cadastraTarefa"-->
        <input :value="props.tarefaTemp" @change="props.editaTarefaTemp" type="text"
            placeholder="Digite aqui a tarefa" required>
        <!--<input :value="estado.tarefaTemp" @change="evento => estado.tarefaTemp = evento.target.value" type="text"
            placeholder="Digite aqui a tarefa" required>-->
        <button type="submit">Cadastrar</button>
        <select @change="props.trocarFiltro">
        <!--<select @change="evento => estado.filtro = evento.target.value">-->
            <option value="todas">Todas as tarefas</option>
            <option value="pendentes">Pendentes</option>
            <option value="finalizadas">Finalizadas</option>
        </select>
    </form>
</template>

<style scoped>
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
</style>