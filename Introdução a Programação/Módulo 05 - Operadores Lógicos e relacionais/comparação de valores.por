programa {
  funcao inicio() {
    
    real num1, num2
    inteiro padrao
    padrao = 25

    escreva("Vamos comparar os valores: \n")

    escreva("Digite o primeiro valor: \n")
    leia(num1)
    escreva("O primeiro valor � ",num1, " cm. \n")

    escreva("Digite o segundo valor: \n")
    leia(num2)
    escreva("O segundo valor � ",num2, " cm. \n")

    se(num1 < padrao){
      escreva("O primeiro valor � menor que ",padrao," cm \n")
    }
    se(num1 > padrao){
      escreva("O primeiro valor � maior que ", padrao, " cm \n")
    }
    se(num1 == padrao){
      escreva("O primeiro valor � igual a ",padrao," cm \n")
    }

    se(num2 < padrao){
      escreva("O segundo valor � menor que ",padrao," cm \n")
    }
    se(num2 > padrao){
      escreva("O segundo valor � maior que ", padrao, " cm \n")
    }
    se(num2 == padrao){
      escreva("O segundo valor � igual a ",padrao," cm \n")
    }


    
  }
}
