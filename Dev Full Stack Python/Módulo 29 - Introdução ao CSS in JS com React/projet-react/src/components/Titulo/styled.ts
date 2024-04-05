import styled from 'styled-components'

import { Props } from './index'

export const Titulo = styled.h3<Props>`
  color: #282e35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
`
