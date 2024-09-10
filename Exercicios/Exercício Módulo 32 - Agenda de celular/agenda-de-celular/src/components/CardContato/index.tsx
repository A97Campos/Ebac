import { useState } from 'react';
import { BsFillTelephoneFill, BsEnvelopeFill, BsPenFill, BsEraserFill, BsTrash3Fill } from 'react-icons/bs';
import * as S from './style';

export type Props = {
    nome: string
    email: string
    telefone: string
    status: string
} 


const CardContato = ({nome, email, telefone, status}: Props) => {

    const [editando, setEditando] = useState(false)

    return (
        <S.Card>
        <S.Nome>
            <S.NomeTitulo>{nome}</S.NomeTitulo>
            <div>
                {editando ? 
                (
                    <S.Botao onClick={() => setEditando(false)}>
                        <BsPenFill />
                    </S.Botao>
                ) 
                : 
                (
                    <S.Botao onClick={() => setEditando(true)}>
                        <BsEraserFill />
                    </S.Botao> 
                )
                }
                <S.Botao>
                    <BsTrash3Fill />
                </S.Botao>          
            </div>
        </S.Nome>
        <S.Text>
            <BsFillTelephoneFill />
            <S.Input type='tel' placeholder={telefone} />
        </S.Text>
        <S.Text>
            <BsEnvelopeFill /> 
            <S.Input type='email' placeholder={email} />
        </S.Text>        
    </S.Card>
    )
}

export default CardContato