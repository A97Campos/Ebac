import CardContato from "../../components/CardContato"
import { ContatosMaps } from "./maps"
import * as S from "./style"

export const Contato = () => (
    <S.Main>
            {ContatosMaps.map((c) => (
                <CardContato 
                    nome={c.nome}
                    status={c.status}
                    telefone={c.telefone}
                    email={c.email}
                />
            ))}
    </S.Main>
)