import { useState } from "react"

import styles from './Global.module.css'

function App() {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const resultado = peso / (altura * altura);

    function Imc() {
        if (resultado <= 18.5) {
            return (
                <p>Abaixo do peso</p>
            )
        } else if (resultado <= 24.9) {
            return (
                <p>Peso normal</p>
            )
        } else if (resultado <= 29.9) {
            return (
                <p>Sobrepeso</p>
            )
        } else if (resultado <= 34.9) {
            return (
                <p>Obesidade grau I</p>
            )
        } else if (resultado <= 39.9) {
            return (
                <p>Obesidade grau II</p>
            )
        } else if (resultado <= 49.9) {
            return (
                <p>Obesidade grau III</p>
            )
        } else if (resultado <= 59.9) {
            return (
                <p>Obesidade grau IV</p>
            )
        } else {
            return (
                <p>Obesidade grau V</p>
            )
        }
    }

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.titulo}>Calcule o Imc</h1>
                <form>
                <input type="number" className={styles.input} placeholder="Digite sua Altura" onChange={(e) => { setAltura(e.target.value) }} />

                <input type="number" className={styles.input} placeholder="Digite seu Peso" onChange={(e) => { setPeso(e.target.value) }} />

                <p className={styles.txt}>{parseFloat(resultado)}</p>

                <p className={styles.txt}><Imc /></p>
            </form>
            </div>
        </>
    )
}

export default App
