import { Provider } from "react-redux";
import { BarraLateral } from "./containers/BarraLateral";
import { Contato } from "./containers/Contatos";
import { Container, EstiloGlobal } from "./styles";
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <Contato />
      </Container>
    </ Provider>
  );
}

export default App;
