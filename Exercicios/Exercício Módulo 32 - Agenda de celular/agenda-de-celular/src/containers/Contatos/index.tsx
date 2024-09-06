import { BsFillTelephoneFill, BsEnvelopeFill, BsPenFill, BsEraserFill, BsTrash3Fill } from 'react-icons/bs';
import * as S from "./style"

export const Contato = () => (
    <S.Main>
    <S.Card>
        <S.Nome>
            <p>Neymar Junior</p>
            <S.Botao>
                <BsPenFill />
            </S.Botao>
            <S.Botao>
                <BsEraserFill />
            </S.Botao>            
            <S.Botao>
                <BsTrash3Fill />
            </S.Botao>            
        </S.Nome>
        <S.Text>
            <BsFillTelephoneFill />
            <p>Telefone</p>
        </S.Text>
        <S.Text>
            <BsEnvelopeFill /> 
            <p>e-mail</p>
        </S.Text>      
        
    </S.Card>
    
    </S.Main>
)