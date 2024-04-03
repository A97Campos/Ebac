import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

  const Botao = styled.button`
background-color: ${(props) => (props.principal ? 'green' : 'blue')};
font-size: ${(props) => props.fontsize || '16px'};
  `

  const BotaoPerigo = styled(Botao)`
  background: red;
  color: #fff;
  `

function Teste() {
  return <>
  <Botao principal>Enviar</Botao>
  <Botao principal={false}>Cancelar</Botao>
  <BotaoPerigo>Não clique</BotaoPerigo>
  </>
}

export default Teste
