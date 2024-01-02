function pessoa (nome){
    this.nome = nome;
    this.dizOi = () => {
        console.log(this.nome + " diz olá")
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function funcionario(nome, cargo, salario) {
    this.cargo = cargo;

    let _salario = salario;

    this.getSalario = () => {
        return _salario;
    }

    this.setSalario = function (valor){
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    pessoa.call(this, nome);
}

const pessoa1 = new pessoa('João');
const funcionario1 = new funcionario('Andrew', 'Front-end', 5000);

funcionario1.dizOi();
funcionario1.dizCargo();
console.log(funcionario1.retornaSalario())

//console.log(pessoa1);
//console.log(funcionario1);