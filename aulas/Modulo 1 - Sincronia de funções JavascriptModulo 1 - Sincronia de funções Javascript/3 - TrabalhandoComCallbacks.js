/*
0- Obter um usuário
1- Obter o numero de telefone de um usuário a partir de seu Id
2- Obter o endereço do usuário pelo Id
*/

function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date(),
    });
  }, 100);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '11001212',
      ddd: 11,
    });
  }, 200);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0,
    });
  }, 200);
}

function resolverUsuario(erro, usuario) {
  console.log('usuario', usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
  //null, '', 0 == false
  if (error) {
    console.error('DEU RUIM EM USUARIO', error);
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error('DEU RUIM EM USUARIO', error1);
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error('DEU RUIM EM USUARIO', error1);
        return;
      }

      console.log(` Nome: ${usuario.nome}, 
                    Endereco: ${endereco.rua}, ${endereco.numero}
                    Telefone: (${telefone.ddd}) ${telefone.telefone}
                    `);
    });
  });
});

//const usuario = obterUsuario();
//const telefone = obterTelefone(usuario.id);
