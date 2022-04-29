const ICrud = require('./interfaces/crud.interface')

class Postgres extends ICrud{
    constructor(){
        super()
    }

    create(){
        console.log("Item Salvo em Postgres")
    }
}

module.exports = Postgres
