import { useState } from "react";
import Perfil from "./components/perfil/index";
import Formulario from "./components/formulario";
import ReposList from "./components/reposList";

import './global.css'

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [idGitHub, setIdGitHub] = useState('')

  return (
    <>
    <input type="text" placeholder="Digite o Id GitHub" onBlur={(e) => setIdGitHub(e.target.value)}/>

    {idGitHub.length > 4 && (
      <> 
      <Perfil idGitHub={idGitHub} endereco={`https://github.com/${idGitHub}.png`}/>
      <ReposList idGitHub={idGitHub}/>
  
      </>
    )}   
    </>
    
    //<button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>Toggle</button>
    //{formularioEstaVisivel && <Formulario />}
    )
}

export default App
