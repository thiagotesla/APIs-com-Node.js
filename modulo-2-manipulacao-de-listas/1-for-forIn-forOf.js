const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const nomes = []
        
        console.time('For')
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i]
            nomes.push(pessoa.name)
        }
        console.timeEnd('For')
        
        
        console.time('forIn')
        for(let i in result.results){
            const pessoa = result.results[i]
            nomes.push(pessoa.name)
        }
        console.timeEnd('forIn')
        

        console.time('forOf')
        for(pessoa of result.results){
            nomes.push(pessoa.name)
        }
        console.timeEnd('forOf')

        console.log('Nomes: ', nomes)
    } catch (error) {
        console.error('Erro interno', error)
    }
}

main()
