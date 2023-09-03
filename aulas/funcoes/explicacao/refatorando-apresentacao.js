function apresentacao(usuario) {
    const { nome, idade, profissao, altura } = usuario;
    if (idade < 18) {
        console.log(`Olá! Meu nome é ${nome}, sou um(a) jovem de ${idade} anos, ${altura}m de altura e sou ${profissao}.`);
    } else if (idade < 65) {
        console.log(`Olá! Meu nome é ${nome}, sou um(a) adulto(a) de ${idade} anos, ${altura}m de altura e sou ${profissao}.`);
    } else {
        console.log(`Olá! Meu nome é ${nome}, sou um(a) idoso de ${idade} anos, ${altura}m de altura e sou ${profissao}.`);
    }
}


const usuario = {
    nome: 'Pâmela',
    idade: 26,
    profissao: 'Programadora',
    altura: 1.75
}
apresentacao(usuario); 

const usuario1 = {
    nome: 'Taina',
    idade: 23,
    profissao: 'Psicanalista',
    altura: 1.75
}
apresentacao(usuario1); 

const usuario2 = {
    nome: 'Laisa',
    idade: 26,
    profissao: 'Design',
    altura: 1.75
}
apresentacao(usuario2); 