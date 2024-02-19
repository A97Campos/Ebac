<script setup>

</script>

<template>
  <header>
    <h1>Minhas tarefas</h1>
    <p>voce possui 2 tarefas pendentes</p>
  </header>
  <main>
    <form>
      <input type="text" placeholder="Digite aqui a descrição da tarefa">
      <button type="button">Cadastrar</button>
      <select>
        <option value="todas">Todas as tarefas</option>
        <option value="pendentes">Pendentes</option>
        <option value="finalizadas">Finalizadas</option>
      </select>
    </form>

    <section>
      <ul>
        <li>
          <input type="checkbox">
          <label for="">Estudar vue.js</label>
        </li>
        <li>
          <input type="checkbox">
          <label for="">Estudar SASS</label>
        </li>
        <li>
          <input type="checkbox">
          <label for="">Ir para a academia</label>
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
</style>
