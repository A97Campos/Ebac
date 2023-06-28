programa {
  funcao inicio() {
    
    real num1, num2
    inteiro padrao
    padrao = 25

    escreva("Vamos comparar os valores: \n")

    escreva("Digite o primeiro valor: \n")
    leia(num1)
    escreva("O primeiro valor é ",num1, " cm. \n")

    escreva("Digite o segundo valor: \n")
    leia(num2)
    escreva("O segundo valor é ",num2, " cm. \n")

    se(num1 < padrao){
      escreva("O primeiro valor é menor que ",padrao," cm \n")
    }
    se(num1 > padrao){
      escreva("O primeiro valor é maior que ", padrao, " cm \n")
    }
    se(num1 == padrao){
      escreva("O primeiro valor é igual a ",padrao," cm \n")
    }

    se(num2 < padrao){
      escreva("O segundo valor é menor que ",padrao," cm \n")
    }
    se(num2 > padrao){
      escreva("O segundo valor é maior que ", padrao, " cm \n")
    }
    se(num2 == padrao){
      escreva("O segundo valor é igual a ",padrao," cm \n")
    }


    
  }
}
