import * as S from './style'
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { alteraTermo } from '../../store/reducers/filtro';

export const BarraLateral = () => {
    const dispatch = useDispatch()
    const { termo } = useSelector((state: RootReducer) => state.filtro)

    return (
        <S.Aside>
        <S.Titulo>Filtre sua pesquisa</S.Titulo>
        <S.InputPesquisar 
            type="text"
            placeholder="Digite para buscar" 
            value={termo}
            onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
        <S.Botao to='/novo-contato'>Adicionar</S.Botao>  
    </S.Aside>
    )
}