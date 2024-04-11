import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { BotaoTema, Descricao, SidebarContainer, TituloLinha } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <TituloLinha fontSize={20}>Andrew Campos</TituloLinha>
      <Paragrafo tipo="secundario" fontSize={16}>
        a97campos
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Estudante de Tecnologia
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
