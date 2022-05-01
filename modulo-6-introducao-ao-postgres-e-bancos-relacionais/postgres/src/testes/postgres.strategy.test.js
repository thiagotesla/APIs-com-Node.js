const assert = require('assert')
const Postgres = require('../db/strategies/postgres.strategy')
const Context = require('../db/strategies/base/context.strategy')

const context = new Context(new Postgres())

describe('Postgres Strategy', function () {
    this.timeout(Infinity)
    it('Should verify PostgreSQL connection', async () =>{
        const result = await context.isConnected()
        assert.equal(result, true)
    })
})
