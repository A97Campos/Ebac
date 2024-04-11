import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  list-style-type: none;
}

body {
  padding: 80px 0;
  background-color: ${(props) => (props.theme as theme).corDeFundo};

  @media (max-width: 768px) {
    padding-top: 16px;
  }
}
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 160px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    display: block;
    max-width: 80%;
  }
`
