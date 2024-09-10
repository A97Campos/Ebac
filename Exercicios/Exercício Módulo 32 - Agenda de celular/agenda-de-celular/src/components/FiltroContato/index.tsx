import * as S from "./style"

export type Props = {
    ativo?: boolean
    legenda: string
}

const FiltroContato = ({ ativo, legenda }: Props) => (          
            <S.Filtro>
                <input type="radio" name={legenda}/>
                <label htmlFor="geral">{legenda}</label>
            </S.Filtro>
)

export default FiltroContato