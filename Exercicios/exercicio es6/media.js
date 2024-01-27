const mediaAlunos = [
    {nome: "João", nota: 8},
    {nome: "Rafael", nota: 5},
    {nome: "Luisa", nota: 6}
];

function filtrarAlunosAprovados(listDeAlunos) {
    return listDeAlunos.filter(alunos => alunos.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(mediaAlunos);

console.log("Alunos Aprovados:", alunosAprovados);