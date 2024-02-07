type aluno = {
    nome: string;
    idade: number;
    curso?: string[];//a interrogação é para fazer com que não seja obrigatório.
}

const alunos: aluno[] = [
    {
        nome: 'Andrew',
        idade: 27,
        curso: ['Front-End']
    },

    {
        nome: 'Lorenzo',
        idade: 7,
        curso: ['Back-end']
    },

    {
        nome: 'Milena',
        idade: 25,
        curso: ['FullStack']
    }
];

alunos.push({
    nome: 'Carlos',
    idade: 58,
    curso: ['Arquitetura']
});

const novoAluno: aluno = {
    nome: 'Adriana',
    idade: 47,
};

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
};