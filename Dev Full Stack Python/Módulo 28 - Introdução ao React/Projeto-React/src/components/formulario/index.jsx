import { useState } from "react"

const Formulario = () => {
    let [materiaA,setMateriaA] = useState(0);
    let [materiaB,setMateriaB] = useState(0);
    let [materiaC,setMateriaC] = useState(0);
    
    return (
        <form>
            <input type="number" placeholder="Digite o valor A" onChange={evento => setMateriaA(evento.target.value)}/>
            <input type="number" placeholder="Digite o valor B" onChange={evento => setMateriaB(evento.target.value)}/>
            <input type="number" placeholder="Digite o valor C" onChange={evento => setMateriaC(evento.target.value)}/>
            <p>{materiaA}</p>
            <p>{materiaB}</p>
            <p>{materiaC}</p>
        </form>
    )
}

export default Formulario