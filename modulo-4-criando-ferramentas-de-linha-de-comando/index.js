const Commander = require('commander')
const database = require('./database')
const Heroi = require('./heroi')

async function main() {
    Commander
        .version('v1')
        .option('-i, --id [value]', 'Identificador do Heroi')
        .option('-n, --nome [value]', 'Nome do Heroi')
        .option('-p, --poder [value]', 'Poder do Heroi')
        .option('-c, --cadastrar', 'Cadastrar um Heroi')
        .option('-r, --listar', 'Listar um Heroi')
        .option('-u, --atualizar [value]', 'Atualizar um heroi pelo id')
        .option('-d, --remover', 'Remove um heroi pelo id')
        .parse(process.argv)

    const heroi = new Heroi(Commander._optionValues)
    try {
        if (Commander._optionValues.cadastrar) {

            delete heroi.id
            const resultado = await database.cadastrar(heroi)

            if (!resultado) {
                console.error("Heroi não cadastrado.")
                return
            }

            console.log('Heroi cadastrado com sucesso!')
        }
        if (Commander._optionValues.listar) {

            const resultado = await database.listar()

            if (!resultado) {
                console.error("Não foi possivel listar os herois")
                return
            }

            console.log('Lista dos Herois: ', resultado)
        }
        if (Commander._optionValues.atualizar) {

            const idAtualizar = +Commander._optionValues.atualizar
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await database.atualizar(idAtualizar, heroiAtualizar)

            if (!resultado) {
                console.error("Heroi não cadastrado.")
                return
            }

            console.log('Heroi atualizado com sucesso!')
        }
        if (Commander._optionValues.remover) {

            const resultado = await database.remover(heroi.id)

            if (!resultado) {
                console.error("Não foi possivel remover o heroi")
                return
            }

            console.log('Heroi removido com sucesso')
        }
    } catch (error) {
        console.error('DEU RUIM VALENDO: ', error)
    }
}

main()
