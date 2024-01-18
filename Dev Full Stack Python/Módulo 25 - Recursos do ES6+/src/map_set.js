let meuMap = new Map();
meuMap.set("nome", "Andrew");

console.log(meuMap);

const array = ['José', 'Maria', 'João', 'João Paulo', 'José', 'João'];
const arrayComSet = new Set([...array])
const arraySemItensDuplicados = [...arrayComSet]

console.log(arrayComSet);
console.log(arraySemItensDuplicados);