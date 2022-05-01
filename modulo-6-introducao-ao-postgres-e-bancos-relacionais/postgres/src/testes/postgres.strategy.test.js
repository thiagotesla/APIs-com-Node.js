const assert = require('assert')
const Postgres = require('../db/strategies/postgres.strategy')
const Context = require('../db/strategies/base/context.strategy')

const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = {
    nome: 'Gavião Negro',
    poder: 'Fechas'
}

describe('Postgres Strategy', function () {
    this.timeout(Infinity)
    this.beforeAll(async () => {
        await context.connect()
    })

    it('Should verify PostgreSQL connection', async () =>{
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it('Should create a Hero', async () => {  
        const result = await context.create(MOCK_HEROI_CADASTRAR)
        delete result.dataValues.id
        assert.deepEqual(result.dataValues, MOCK_HEROI_CADASTRAR)
    })
})
