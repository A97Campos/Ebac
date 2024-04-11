import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styled'
import { Titulo } from '../../components/Titulo/styled'

export const Descricao = styled(P)`
  white-space: nowrap;
`

export const TituloLinha = styled(Titulo)`
  white-space: nowrap;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  margin-bottom: 16px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
