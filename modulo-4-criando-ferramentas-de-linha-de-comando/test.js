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
    before('Cadastrar um heroi', async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })
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
})
