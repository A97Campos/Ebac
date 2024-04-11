import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/projetos'
import Sidebar from './containers/sidebar'
import Sobre from './containers/sobre'
import EstiloGlobal from './styles'
import { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [usandoTemaDark, setUsandoTemaDark] = useState(false)

  function trocaTema() {
    setUsandoTemaDark(!usandoTemaDark)
  }

  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
