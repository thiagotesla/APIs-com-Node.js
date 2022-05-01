const assert = require('assert')
const Postgres = require('../db/strategies/postgres.strategy')
const Context = require('../db/strategies/base/context.strategy')

const context = new Context(new Postgres())
const MOCK_HEROI = {
    nome: 'Super Man',
    poder: 'Super força'
}

describe('Postgres Strategy', function () {
    this.timeout(Infinity)
    this.beforeAll(async () => {
        await context.connect()
        await context.create(MOCK_HEROI)
    })

    it('Deve verificar a conexão com o PostgreSQL', async () => {
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it('Deve criar um Heroi', async () => {
        const resultado = await context.create(MOCK_HEROI)
        delete resultado.dataValues.id
        assert.deepEqual(resultado.dataValues, MOCK_HEROI)
    })

    it('Deve ler um heroi pela query', async () => {
        const [resultado] = await context.read({ nome: MOCK_HEROI.nome })
        delete resultado.id
        assert.deepEqual(resultado, MOCK_HEROI)
    })

    it('Deve atualizar o nome de um heroi pelo id', async () => {
        const [atualizarHeroi] = await context.read({ nome: MOCK_HEROI.nome })
        novoHeroi = {
            ...MOCK_HEROI,
            nome: 'Mulher maravilha',
        }
        const [resultado] = await context.update(atualizarHeroi.id, novoHeroi)
        const [heroiAtualizado] = await context.read({ id: atualizarHeroi.id })
        assert.deepEqual(resultado, true)
        assert.deepEqual(heroiAtualizado.nome, novoHeroi.nome)
    })

    it('Deve deletar um heroi pelo id', async () => {
        const [deletarHeroi] = await context.read({ })
        const resultado = await context.delete(deletarHeroi.id)
        assert.deepEqual(resultado, true)
    })
})
