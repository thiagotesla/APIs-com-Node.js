const {
    deepEqual,
    ok
} = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    
    nome: "Flash",
    poder: "Velocidade",
    id: 1,
    
}

describe('Suite de manipulação de Herois', () => {

    it('CREATE: Deve cadastrar um heroi usando arquivos.', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        ok(resultado, expected)
    })

    it('READ: Deve pesquisar um heroi usando arquivos.', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)

        deepEqual(resultado, expected)
    })
    it('DELETE: Deve excluir um heroi por id', async () => {
        const expected = true
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })

})
