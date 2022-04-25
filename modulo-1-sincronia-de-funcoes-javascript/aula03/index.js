/*

    Objetivo:


        Refatorar as promises da aula02 em async/await


*/

function obterUsuario(){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout( function (){
            return resolve ({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            }) 
        }, 1000)
    })
}

function obterTelefone(id){
    return new Promise( function resolvePromise(resolve, reject){
        setTimeout( function () {
            return resolve ({
                numero: '999887766',
                ddd: '85',
            })
        }, 2000)
    })
}

function obterEndereco(id){
    return new Promise( function resolvePromise(resolve, reject){
        setTimeout(function () {
            return resolve ({ 
                rua: "Dos bobos",
                numero: 0
            })
        }, 2000)
    })
}


main()          
async function main(){
    try{
        console.time('tempo-execucao')
        const usuario = await obterUsuario()

        /*
            Processos concorrentes: tempo-execucao: 5.000s
                const telefone = await obterTelefone(usuario.id)
                const endereco = await obterEndereco(usuario.id)

        */
        
        // Processos paralelos: tempo-execucao: 3.000s
        
        const retorno = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ])

        const endereco = retorno[1]
        const telefone = retorno[0]

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.numero}
            Endereço: Rua ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('tempo-execucao')
    }
    catch(error){
        console.error("DEU RUIM", error)
    }
}

/*

    Output:


        Nome: Aladin,
        Telefone: (85) 999887766
        Endereço: Rua Dos bobos, 0


*/