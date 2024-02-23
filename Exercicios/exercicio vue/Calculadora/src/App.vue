<script setup>
import { reactive, watch } from 'vue';

const estado = reactive({
  itens: {
    num1: '',
    num2: '',
    operador: '+',
    resultado: '',
  }
  });

  const calcularResultado = () => {
    switch (estado.itens.operador) {
        case '+':
          estado.itens.resultado = estado.itens.num1 + estado.itens.num2;
          break;
        case '-':
          estado.itens.resultado = estado.itens.num1 - estado.itens.num2;
          break;
        case '*':
          estado.itens.resultado = estado.itens.num1 * estado.itens.num2;
          break;
        case '/':
          estado.itens.resultado = estado.itens.num1 / estado.itens.num2;
          break;
        default:
          break;
      }
  };

  watch(()=> estado.itens.num1, calcularResultado);
  watch(()=> estado.itens.num2, calcularResultado);
  watch(()=> estado.itens.operador, calcularResultado);

</script>

<template>
  <form>
    <section>
      <input type="number" placeholder="Digite um numero" v-model="estado.itens.num1">
      <select v-model="estado.itens.operador">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" placeholder="Digite um numero" v-model="estado.itens.num2">
      <input type="text" placeholder="Resultado" v-model="estado.itens.resultado" id="resultado">
    </section>
  </form>
</template>

<style scoped>
form {
  background: linear-gradient(#3E7FF0, #3E47F0);
  width: 100vw;
  height: 100vh;
}

form section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form input,
form select {
  padding: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
}

form select {
  margin: 0 8px;
}

#resultado{
  margin-left: 8px;
  width: 80px;
}
</style>
