programa {
  inclua biblioteca Util --> u
  funcao inicio() {
    inteiro num, numComp, soma, resto
    caracter parImpar

    escreva("Este é um jogo de Par ou Impar contra o computador \n")
    escreva("Digite (p) para Par ou (i) para Impar \n")
    leia(parImpar)

    se(parImpar == 'p'){
      escreva("Você escolheu Par, Boa sorte ! \n")
    }
    senao se (parImpar == 'i'){
      escreva("VocÊ escolheu Impar, Boa sorte! \n")
    }
    senao {
      escreva("VocÊ escolheu uma letra inválida, tente de novo!")
    }
  
    escreva("Digite um número de 1 a 5.")
    leia(num)

    se(num <= 5){
      numComp = u.sorteia(1,5)
      escreva("O computador jogou: ",numComp, ".\n")
      soma = num + numComp
      resto = soma % 2
      se((resto == 0)e(parImpar == "p")){
        escreva("Você jogou par, com o valor: ",num, " o computador jogou impar, com o valor: ",numComp,". Você venceu! A soma foi ",soma, ".\n")
      }
      senao se((resto == 1)e(parImpar == "i")){
        escreva("Você jogou impar, com o valor: ",num, " o computador jogou par, com o valor: ",numComp,". Você venceu! A soma foi ",soma, ".\n")
      }
      senao {
        escreva("Você perdeu!")
      }
    }
}
