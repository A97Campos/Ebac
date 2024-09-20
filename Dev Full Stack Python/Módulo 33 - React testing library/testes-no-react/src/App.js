import { useState } from "react";

function App() {
  const [tarefa, setTarefa] = useState([])
  const [tarefaTemp, setTarefaTemp] = useState('')

  function cadastrarTarefa() {
    setTarefa([...tarefa, tarefaTemp])
    setTarefaTemp('')
  }

  return (
    <div className="App">
      <input data-testid="campo-tarefa" type="text" value={tarefaTemp} onChange={evento => setTarefaTemp(evento.target.value)}/>
      <button data-testid="btn-cadastrar" onClick={cadastrarTarefa} type="button">cadastrar</button>
      <ul>
        {tarefa.map(tarefa => (
          <li>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
