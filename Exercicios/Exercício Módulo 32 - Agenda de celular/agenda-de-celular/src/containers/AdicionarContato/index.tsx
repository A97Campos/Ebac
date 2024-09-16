import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import * as S from "./style"
import * as enums from '../../utils/enums/index'
import Contato from "../../models/contato"
import { cadastrar } from "../../store/reducers/contatos"

export const AdicionarContato = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nomeContato, setNomeContato] = useState('')
    const [numeroContato, setNumeroContato] = useState('')
    const [emailContato, setEmailContato] = useState('')
    const [prioridade, setPrioridade] = useState(enums.CicloSocial.AMIGOS)

    const cadastrarTarefa = (evento: FormEvent) => {
        evento.preventDefault()
        const contatoParaAdicionar = new Contato (nomeContato, prioridade, numeroContato, emailContato, 9)
        dispatch(cadastrar(contatoParaAdicionar))
        navigate('/')
    }
    

    return (
        <S.Container>
            <S.Voltar to='/'>X</S.Voltar>
            <S.Card>
                <S.Titulo>Adicione um novo contato</S.Titulo>
                <S.Form onSubmit={cadastrarTarefa}>
                    <S.Label htmlFor="nome">Nome:</S.Label>
                    <S.Input type="text" 
                    value={nomeContato}
                    onChange={(evento) => setNomeContato(evento.target.value)}
                    id="nome"
                    />
                    <S.Ciclo>
                        {Object.values(enums.CicloSocial).map(CicloSocial => (
                            <span key={CicloSocial}>
                                <input 
                                type="radio" 
                                name="cicloSocial" 
                                id={CicloSocial} 
                                value={CicloSocial}
                                onChange={(evento) => setPrioridade(evento.target.value as enums.CicloSocial)}
                                defaultChecked={prioridade === enums.CicloSocial.AMIGOS}
                                />
                                <S.Label htmlFor={CicloSocial}>{CicloSocial}</S.Label>
                            </span>
                            
                        ))}
                    </S.Ciclo>
                    <S.Label htmlFor="telefone">Telefone:</S.Label>
                    <S.Input type="tel" 
                    id="telefone"
                    value={numeroContato}
                    onChange={(evento) => setNumeroContato(evento.target.value)}
                    />
                    <S.Label htmlFor="email">Email:</S.Label>
                    <S.Input type="email" 
                    id="email"
                    value={emailContato}
                    onChange={(evento) => setEmailContato(evento.target.value)}
                    />

                    <S.Button type="submit" >Adicionar</S.Button>
                </S.Form>      
            </S.Card>
        </S.Container>
    )
}