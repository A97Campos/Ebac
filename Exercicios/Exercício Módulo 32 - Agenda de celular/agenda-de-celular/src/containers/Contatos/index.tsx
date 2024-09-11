import { useSelector } from "react-redux"

import CardContato from "../../components/CardContato"
import * as S from "./style"

import { RootReducer } from "../../store"

export const Contato = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    return (
        <S.Main>
            {itens.map((c) => (
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