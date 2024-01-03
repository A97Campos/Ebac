function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " diz olá")
    }
}

function Funcionario(nome, cargo, salario){
    this.nome = nome;
    this.cargo = cargo;
    let _salario = salario;
    this.getSalario = function (){//retorna salario
        return `O salario de ${this.nome} é de ${_salario}.`;
    }
    // this.salario = salario;
    this.setSalario = function(valor){//atribui salario
        if(typeof valor === 'number'){
            _salario = valor;
        }
    }
    /* utilizado para chamar apenas o cargo
    this.dizCargo = function(){
        console.log(this.cargo)
    }
    */

    Pessoa.call(this, nome);
}

//const pessoa1 = new Pessoa("Milena");
const funcionario1 = new Funcionario('Andrew', 'Dev Front-End', 5000);
funcionario1.dizOi();

//console.log(pessoa1);
//console.log(funcionario1);
funcionario1.setSalario(7000);
console.log(funcionario1.getSalario());