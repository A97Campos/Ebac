import * as S from "./style"
import * as enums from "../../utils/enums"

export type Props = {
    ativo?: boolean
    legenda: enums.CicloSocial
}

const FiltroContato = ({ ativo, legenda }: Props) => (          
            <S.Filtro>
                <input type="radio" name={legenda}/>
                <label htmlFor="geral">{legenda}</label>
            </S.Filtro>
)

export default FiltroContato