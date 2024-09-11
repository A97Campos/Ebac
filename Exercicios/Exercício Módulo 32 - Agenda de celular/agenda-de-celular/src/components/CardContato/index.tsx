import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsFillTelephoneFill, BsEnvelopeFill, BsPenFill, BsEraserFill, BsTrash3Fill } from 'react-icons/bs';
import * as S from './style';
import * as enums from '../../utils/enums'

import { remover, editar } from '../../store/reducers/contatos'

export type Props = {
    nome: string
    email: string
    telefone: string
    status: enums.CicloSocial
    id: number
} 


const CardContato = ({nome, email, telefone, status, id}: Props) => {
    const dispatch = useDispatch()
    const [editando, setEditando] = useState(false)
    const [mudaTel, setMudaTel] = useState('')
    const [mudaEmail, setMudaEmail] = useState('')

    useEffect(() => {
        if(telefone.length > 0) {
            setMudaTel(telefone)
        }
    }, [telefone])

    function cancelaEdicao() {
        setEditando(false)
        setMudaTel(telefone)
        setMudaEmail(email)
    }

    return (
        <S.Card>
        <S.Nome>
            <S.NomeTitulo>{nome}</S.NomeTitulo>
            <div>
                {editando ? 
                (
                    <>
                        <S.Botao onClick={cancelaEdicao}>
                            <BsEraserFill />
                        </S.Botao>
                        <S.Botao onClick={() => {
                            dispatch(editar({
                                nome,
                                email,
                                telefone,
                                status,
                                id
                            })
                        )
                        setEditando(false)
                        }}>
                            <BsPenFill />
                        </S.Botao>                    
                    </>
                ) 
                : 
                (
                    <S.Botao onClick={() => setEditando(true)}>
                        <BsEraserFill />
                    </S.Botao> 
                )
                }
                <S.Botao onClick={() => dispatch(remover(id))}>
                    <BsTrash3Fill />
                </S.Botao>          
            </div>
        </S.Nome>
        <S.P>{status}</S.P>
        <S.Text>
            <BsFillTelephoneFill />
            <S.Input type='number' placeholder={telefone} value={mudaTel} onChange={(evento) => setMudaTel(evento.target.value)} disabled={!editando}/>
        </S.Text>
        <S.Text>
            <BsEnvelopeFill /> 
            <S.Input type='email' placeholder={email} value={mudaEmail} onChange={(evento) => setMudaEmail(evento.target.value)} disabled={!editando}/>
        </S.Text>        
    </S.Card>
    )
}

export default CardContato