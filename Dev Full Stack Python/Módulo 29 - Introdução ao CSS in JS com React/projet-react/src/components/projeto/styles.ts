import styled from 'styled-components'

export const LinkBotao = styled.a`
  padding: 8px;
  font-size: 14px;
  text-decoration: none;
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corDeFundoBotao};
  cursor: pointer;
`

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`
