const ICrud = require('./interfaces/crud.interface')

class MongoDb extends ICrud{
    constructor(){
        super()
    }
    create(){
        console.log("Item Salvo em mongoDB")
    }
}

module.exports = MongoDb
