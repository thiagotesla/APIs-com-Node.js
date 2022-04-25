/*

    Objetivo:


        Refatorar os callbacks da aula01 em promises


*/

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

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
        setTimeout( function (){
            return resolve ({
                numero: '999887766',
                ddd: '85',
            })
        }, 2000)
    })
}

function obterEndereco(id, callback){
setTimeout(() => {
    return callback(null, { 
        rua: "Dos bobos",
        numero: 0
    })
}, 2000)
}

const usuarioPromise = obterUsuario()
usuarioPromise
.then(function (usuario){
    return obterTelefone(usuario.id)
        .then(function resolverTelefone(telefone){
            return  {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: telefone
            }
        })
})
.then(function (usuario){
    const endereco = obterEnderecoAsync(usuario.usuario.id)
    return endereco.then(function(endereco){
        return {
            usuario: usuario.usuario,
            telefone: usuario.telefone,
            endereco: endereco,
        }
    })
})
.then(function(retorno) {
    console.log(`
    Nome: ${retorno.usuario.nome},
    Telefone: (${retorno.telefone.ddd}) ${retorno.telefone.numero}
    Endereço: Rua ${retorno.endereco.rua}, ${retorno.endereco.numero}
    `)
})
.catch(function (error) {
    console.error('usuarioPromise falhou', error)
})

/*

    Output:


        Nome: Aladin,
        Telefone: (85) 999887766
        Endereço: Rua Dos bobos, 0


*/