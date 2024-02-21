<script setup>
const props = defineProps(['tarefas']);
</script>

<template>
    <ul>
        <li v-for="tarefa in props.tarefas">
            <!--<li v-for="tarefa in getTarefasFiltradas()">-->
            <input @change="evento => tarefa.finalizada = evento.target.checked" :checked="tarefa.finalizada"
                :id="tarefa.titulo" type="checkbox">
            <label :class="{ done: tarefa.finalizada }" :for="tarefa.titulo">{{ tarefa.titulo }}</label>
        </li>
    </ul>
</template>

<style scoped>

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
