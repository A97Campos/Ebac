import { useState } from "react"

function App() {
  
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  return (
    <>
      <form>
        <input type="number" placeholder="Digite sua Altura" onChange={(e) => {setAltura(e.target.value)}}/>

        <input type="number" placeholder="Digite seu Peso" onChange={(e) => {setPeso(e.target.value)}}/>

        <p>Resultado: {peso / (altura * altura)}</p>
      </form>
    </>
  )
}

export default App
