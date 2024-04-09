import styled from 'styled-components'

import { Props } from './index'

export const P = styled.p<Props>`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
`
