programa {
  funcao inicio() {
    real media, nota
    media = 6

    escreva("Digite sua Nota: \n")
    leia(nota)

    se(nota == 10){
      escreva("Excelente, voc� tirou nota maxima! \n")
    }senao se(nota >= 8) {
      escreva("Muito bom, sua nota foi: ",nota, " \n")
    }senao se(nota >= media){
      escreva("Sua nota foi: ",nota, " \n")
    }senao se(nota < media) {
      escreva("Voc� est� reprovado. Sua nota foi: ",nota)
    }

  }
}
