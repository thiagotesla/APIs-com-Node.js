const ContextEstrategy = require('./db/strategies/base/context.strategy')
const MongoDb = require('./db/strategies/mongodb.strategy')
const Postgres = require('./db/strategies/postgres.strategy')

const ContextMongo = new ContextEstrategy(new MongoDb())
ContextMongo.create()

const ContextPostgres = new ContextEstrategy(new Postgres())
ContextPostgres.create()