programa {
  funcao inicio() {
    
      inteiro numTab, termo, contador
      
      numTab = 0
      termo = 0
      contador = 1

      escreva("Faremos uma tabuada. \n")
      escreva("Escreva o numero que quer ver. \n")
      leia(numTab)
      escreva("O numero escolhido foi ", numTab, "! \n")

      enquanto (contador <= 10){
        termo = termo + numTab
        escreva ("o termo " ,contador, " é: ",termo, ". \n")
        contador = contador + 1
      }
    
  }
}
