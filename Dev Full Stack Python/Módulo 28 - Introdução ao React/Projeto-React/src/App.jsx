import { PI } from "./teste";
import Perfil from "./components/perfil/index";
import Formulario from "./components/formulario";

function App() {
  const nome = 'Andrew';

  function digitaNome() {
    return nome;
  };

  const pessoa = {
    nome: 'José',
  }

  let estaDeDia = true;

  return (
    <>
    <h1>Olá Mundo</h1>
    <h2>Subtítulo</h2>
    <p>{digitaNome()}</p>
    <p>{nome}</p>
    <p>Olá, {pessoa.nome}</p>
    <p>{estaDeDia === true ? 'Bom dia':'Boa tarde'}</p>
    {PI}
    <Perfil nome={'Andrew'} endereco={'https://github.com/A97Campos.png'}/>
    <Formulario />
    
    </>
    
    )
}

export default App
