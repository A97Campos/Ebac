import Titulo from '../../components/Titulo'
import { FotoPerfil } from './styles'

const Sidebar = () => (
  <aside>
    <FotoPerfil src="https://github.com/a97campos.png" />
    <Titulo fontSize={20}>Andrew Campos</Titulo>
  </aside>
)

export default Sidebar
