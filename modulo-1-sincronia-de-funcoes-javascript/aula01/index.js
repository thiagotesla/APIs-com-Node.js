/*

    Objetivo:


        0 - Obter usuário
        1 - Obter telefone pelo Id
        2 - Obter endereço pelo Id


*/

function obterUsuario(callback){
    setTimeout( function (){
        return callback (null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        }) 
    }, 1000)
}

function obterTelefone(id, callback){
    setTimeout( function (){
        return callback(null, {
            numero: '999887766',
            ddd: '85',
        })
    }, 2000)
}

function obterEndereco(id, callback){
setTimeout(() => {
    return callback(null, { 
        rua: "Dos bobos",
        numero: 0
    })
}, 2000)
}


obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 === false

    if(error){
        console.error('Erro em usuário', error)
        return
    }
    obterTelefone(usuario.id, function resolverTelefone(erro1, telefone){
        if(erro1){
            console.error('Erro em TELEFONE', error)
            return
        }
        obterEndereco(usuario.id, function resolverEndereco(erro2, endereco){
            if(erro2){
                console.erro('Deu ruim no ENDEREÇO', error)
                return
            }

            console.log(`
            Usuário: ${usuario.nome},
            Endereço: Rua: ${endereco.rua}, n° ${endereco.numero},
            Telefone: (${telefone.ddd}) ${telefone.numero}
            `)
        })
    })

}) 

/*

    Output:


        Usuário: Aladin,
        Endereço: Rua: Dos bobos, n° 0,
        Telefone: (85) 999887766


*/
