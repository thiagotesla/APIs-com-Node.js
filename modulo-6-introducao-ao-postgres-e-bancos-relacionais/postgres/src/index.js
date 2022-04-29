const ContextEstrategy = require('./db/strategies/base/conxtextStrategy')
const MongoDb = require('./db/strategies/mongodb')
const Postgres = require('./db/strategies/postgres')

const ContextMongo = new ContextEstrategy(new MongoDb())
ContextMongo.create()

const ContextPostgres = new ContextEstrategy(new Postgres())
ContextPostgres.create()