const { obterPessoas } = require('./service')

/*

const item = {
    nome: 'Thiago Barros',
    idade: 11, 
}    

const {name, idade} = item
console.log(nome, idade)
*/

Array.prototype.meuFilter = function(callback){
    const lista = []
    for(index in this) {
        const item = this[index]
        const result = callback(item, index, this) 
        if(!result) continue
        lista.push(item)
    }
    return lista
}

async function main(){
    try {
        const {
            results 
        } = await obterPessoas('a')
        // const familiaLars = results.filter(function (item){
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // })

        const familiaLars = results.meuFilter((item, index, lista) =>{
            console.log(`index:  ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !==-1
        })
        
        const nomes = familiaLars.map(pessoa => pessoa.name)
        console.log('Nomes: ', nomes)
    } catch (error) {
        console.error('Deu ruim: ', error)
    }
}

main()