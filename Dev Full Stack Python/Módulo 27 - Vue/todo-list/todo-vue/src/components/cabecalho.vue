<script setup>
const props = defineProps(['tarefasPendentes']);

</script>

<template>
    <h1>Minhas tarefas</h1>
    <p>Você possui {{ props.tarefasPendentes }} tarefas pendentes</p>
    <!--Antes era getTarefasPendentes().length -->
</template>