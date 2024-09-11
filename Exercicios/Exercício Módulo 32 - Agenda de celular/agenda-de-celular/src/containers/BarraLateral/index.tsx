import * as S from './style'
import FiltroContato from '../../components/FiltroContato/index';
import * as enums from '../../utils/enums'

export const BarraLateral = () => (
    <S.Aside>
        <S.Titulo>Filtre sua pesquisa</S.Titulo>
        <S.InputPesquisar type="text" placeholder="Digite para buscar" />
        <form>
            <FiltroContato legenda={enums.CicloSocial.GERAL} />
            <FiltroContato legenda={enums.CicloSocial.FAMILIA} />
            <FiltroContato legenda={enums.CicloSocial.TRABALHO} />
            <FiltroContato legenda={enums.CicloSocial.AMIGOS} ativo />
        </form>
        <S.Botao type="button">Adicionar novo contato</S.Botao>  
    </S.Aside>
)