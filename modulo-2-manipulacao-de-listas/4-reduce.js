const {
    obterPessoas 
} = require('./service')



Array.prototype.meuReduce = function(callback, valorInicial){
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for(let i=0; i<=this.length-1; i++){
        valorFinal = callback(valorFinal , this[i], this)
    }
    return valorFinal
}

async function main(){
    
try {
    // const { results } = await obterPessoas('a')
    // const pesos = results.map(item => parseInt(item.height))
    // console.log('pesos: ', pesos)

    // Usando o reduce nativo
    // const total = pesos.reduce((anterior, proximo ) =>{
    //     return anterior + proximo
    // })

    const minhaLista = [
        ['Thiago', 'Barros'],
        ['NodeBR', 'Balta.io'],
    ]

    const total = minhaLista.meuReduce((anterior, proximo)=> {
        return anterior.concat(proximo)
        
    },[])
    .join(', ') // join(', ') transforma o objeto vindo como array em uma string 
    const tipo = typeof total
    console.log("Array reduzido: ", total, 'Tipo: ', tipo)    
} catch (error) {
    console.error('Deu ruim', error)
}
}
main()
