function apresentacao(usuario) {
    const { nome, idade, profissao, altura } = usuario;
    console.log(`Olá! Meu nome é ${nome}, sou um(a) ${faixaEtariaDoUsuario(idade)} de ${idade} anos, ${altura}m de altura e sou ${profissao}.`);
}

function faixaEtariaDoUsuario(idade) {
    if (idade < 22) {
        return 'Jovem';
    } else if (idade < 66) {
        return 'Adulto(a)';
    } else {
        return 'Idoso(a)';
    }
}

const usuario = {
    nome: 'Pâmela',
    idade: 30,
    profissao: 'Programadora',
    altura: 1.75
}

apresentacao(usuario);