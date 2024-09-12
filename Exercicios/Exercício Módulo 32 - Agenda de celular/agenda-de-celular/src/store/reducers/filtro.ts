import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums'

type FiltroState  = {
    termo: string
    criterio: 'cicloSocial' | 'geral'
    valor?: enums.CicloSocial
}

const initialState: FiltroState = {
    termo: '',
    criterio: 'geral'
}

const filtroSlice = createSlice({
    name: 'filtro',
    initialState,
    reducers: {
        alteraTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload
        }
    }
})

export const { alteraTermo } = filtroSlice.actions

export default filtroSlice.reducer