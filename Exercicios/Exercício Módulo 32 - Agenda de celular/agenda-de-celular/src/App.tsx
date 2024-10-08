import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container, EstiloGlobal } from "./styles";
import store from './store'
import Home from "./pages/Home";
import NovoContato from "./pages/NovoContato";

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo-contato',
    element: <NovoContato />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
        <RouterProvider router={rotas} />
    </ Provider>
  );
}

export default App;
