import { useSelector } from "react-redux"

import CardContato from "../../components/CardContato"
import * as S from "./style"

import { RootReducer } from "../../store"

export const Contato = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const { termo } = useSelector((state: RootReducer) => state.filtro)

    const filtraContatos = () => {
        return itens.filter((item) => item.nome.toLowerCase().search(termo) >= 0)
    }

    return (
        <S.Main>            
            {filtraContatos().map((c) => (
                <CardContato 
                    id={c.id}
                    nome={c.nome}
                    status={c.status}
                    telefone={c.telefone}
                    email={c.email}
                />
            ))}
        </S.Main>
    )
}