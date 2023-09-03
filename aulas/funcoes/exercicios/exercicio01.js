
const usuario = {
    nome: 'Pâmela',
    idade: 26,
    profissao: 'Programadora',
    altura: 1.75
}

function apresentacao(usuario) {
    const { nome, idade, profissao, altura } = usuario;
    console.log(`Olá! Meu nome é ${nome}, sou um(a) jovem de ${idade} anos, ${altura}m de altura e sou ${profissao}.`);
}

apresentacao(usuario);