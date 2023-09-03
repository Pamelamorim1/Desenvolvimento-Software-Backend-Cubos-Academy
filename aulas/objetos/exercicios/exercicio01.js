const pessoa = {
    nome: 'Pâmela',
    idade: 30,
    altura: 1.73,
    temCNH: false,
    apelidos: ['Pâm', 'Panda', 'PR']
}

const existeCNH = pessoa.temCNH ? 'possui CNH' : 'não possui CNH';

console.log(pessoa);

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${existeCNH} e tem os seguintes apelidos: `);
for (const p of pessoa.apelidos){
    console.log(p);
}


