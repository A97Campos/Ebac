import * as enums from '../utils/enums/index'

class Contato {
    nome: string
    status: enums.CicloSocial
    telefone: string
    email: string
    id: number

    constructor(
        nome: string,
        status: enums.CicloSocial,
        telefone: string,
        email: string,
        id: number
    ) {
        this.nome = nome
        this.status = status
        this.telefone = telefone
        this.email = email
        this.id = id
    }
}

export default Contato