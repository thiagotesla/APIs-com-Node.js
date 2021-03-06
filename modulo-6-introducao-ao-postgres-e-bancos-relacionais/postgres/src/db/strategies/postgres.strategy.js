const ICrud = require('./interfaces/crud.interface')
const Sequelize = require('sequelize')

class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null,
            this._herois = null
    }
    async isConnected() {
        try {
            await this._driver.authenticate()
            return true
        } catch (error) {
            console.error('Fail!', error)
            return false
        }
    }

    async defineModel() {
        this._herois = this._driver.define('herois', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                required: true,
            },
            poder: {
                type: Sequelize.STRING,
                required: true,
            }
        }, {
            tableName: 'TB_HEROIS',
            freezeTableName: false,
            timestamps: false
        })
        await this._herois.sync()
    }

    async create(item) {
        return await this._herois.create(item)
    }

    async read(item = {}) {
        return await this._herois.findAll({where: item, raw: true} )
    }

    async update(id, item){
        return await this._herois.update(item, {where: {id: id}})
    }

    async delete(id){
        return await this._herois.destroy({where: {id}})
    }
    
    async connect() {
        this._driver = new Sequelize(
            'heroes',
            'mrnobody',
            'sosecure',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        )
        await this.defineModel()
    }
}

module.exports = Postgres
