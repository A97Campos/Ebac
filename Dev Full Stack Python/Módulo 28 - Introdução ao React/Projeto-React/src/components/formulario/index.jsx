import { useState } from "react"

const Formulario = () => {
    let [materiaA,setMateriaA] = useState(0);//pode ser colocado '' no lugar do 0.
    let [materiaB,setMateriaB] = useState(0);
    let [materiaC,setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    const alterNome = (evento) => {
        setNome(evento.target.value);

        return evento.target.value;
    }

    function renderizaResultado() {
        const soma = materiaA + materiaB + materiaC
        const media = soma/3

        if (media >= 7){
            return (
                <p>Olá, {nome}, você foi aprovado !</p>
            )
        } else {
            return (
                <p>Olá, {nome}, infelizmente você foi reprovado.</p>
            )
        }
    }
    
    return (
        <form>
            <input type="text" placeholder="Digite seu nome" onChange={alterNome}/>
            <input type="number" placeholder="Digite o valor A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Digite o valor B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Digite o valor C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            <p>{materiaA}</p>
            <p>{materiaB}</p>
            <p>{materiaC}</p>
            <p>{renderizaResultado()}</p>
        </form>
    )
}

export default Formulario