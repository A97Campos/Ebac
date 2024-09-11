import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/contato";
import * as enums from '../../utils/enums/index'

type ContatosState = {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            id: 1,
            nome: 'Andrew Campos Leandro',
            status: enums.CicloSocial.FAMILIA,
            telefone: '(21) 9 9090-9090',
            email: 'andrewleandro@gmail.com'
        },
        {
            id: 2,
            nome: 'Neymar dos Santos Junior',
            status: enums.CicloSocial.AMIGOS,
            telefone: '(21) 9 9090-9090',
            email: 'njr@gmail.com'
        },
        {
            id: 3,
            nome: 'Gabriel dos Santos Barbosa',
            status: enums.CicloSocial.TRABALHO,
            telefone: '(21) 9 9090-9090',
            email: 'gabigol@gmail.comm'
        }
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState: initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter(contato => contato.id !== action.payload)
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDaTarefa = state.itens.findIndex(
                (t) => t.id === action.payload.id
            )

            if (indexDaTarefa >= 0) {
                state.itens[indexDaTarefa] = action.payload
            }
        }
    }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer