import * as S from './style'
import FiltroContato from '../../components/FiltroContato/index';

export const BarraLateral = () => (
    <S.Aside>
        <S.Titulo>Filtre sua pesquisa</S.Titulo>
        <S.InputPesquisar type="text" placeholder="Digite para buscar" />
        <form>
            <FiltroContato legenda='Geral' />
            <FiltroContato legenda='Família' />
            <FiltroContato legenda='Trabalho' />
            <FiltroContato legenda='Amigos' ativo />
        </form>
        <S.Botao type="button">Adicionar novo contato</S.Botao>  
    </S.Aside>
)