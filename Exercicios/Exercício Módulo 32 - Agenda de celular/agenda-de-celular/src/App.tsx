import { BarraLateral } from "./containers/BarraLateral";
import { Contato } from "./containers/Contatos";
import { Container, EstiloGlobal } from "./styles";

function App() {
  return (
    <>
    <EstiloGlobal />
    <Container>
      <BarraLateral />
      <Contato />
    </Container>
    </>
  );
}

export default App;
