const saudacao = require('./saudacao')

describe('teste para saudação', () => {
    test('Deve retornar ola, José', () => {
        const olaJose = saudacao.dizOla('José')
        expect (olaJose).toBe('ola, José')
    })
})