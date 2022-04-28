const service = require('./service')

Array.prototype.meuMap = function (callback){
    const novoArrayMapeado = []
    for(let i=0; i<=this.length-1; i++){
        const resultado = callback(this[i], i)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado
}

async function main(){
    try {
        const result = await service.obterPessoas('a')
        
        /* Usando forEach
        const nomes = []
        result.results.forEach(pessoa => {
            nomes.push(pessoa.name)
        })
        */

        /* Usando Map com a sintáse convencional 
        const nomes = result.results.map(function (pessoa){
            return pessoa.name
        })
        */

        /* Usando Map com a sintáxe de flecha (arrow function)
        const nomes = result.results.map(pessoa => pessoa.name)
        */

        const nomes = result.results.meuMap(function (pessoa, i){
            return `[${i}]${pessoa.name}`
        })

        console.log('Nomes: ', nomes)

    } catch (error) {
        console.error('Deu ruim', error)
    }
}

main()
