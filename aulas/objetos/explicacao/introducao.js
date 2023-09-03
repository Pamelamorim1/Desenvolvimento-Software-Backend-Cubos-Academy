const pessoa = {
    nome: 'Pâmela Taine',
    parentesco: 'filha',
    peso:  55,
    altura: 1.73,
};

pessoa.nome = 'Pâmela';
pessoa['peso'] = 80;
pessoa.nome = 'Pâm';
pessoa['parentesco'] = 'afilhada';

console.log(pessoa.nome);
console.log(pessoa.peso);
console.log(pessoa.parentesco);
console.log(pessoa.tiposanguinio);
console.log(pessoa.altura);
console.log(pessoa);



