const pessoa = {
    nome: 'Pâmela',
    idade: 30,
    altura: 1.73,
    temCNH: false,
    carro: {
        marca: 'Toyota',
        modelo: 'Etios'
    }
}

const {nome, idade, altura, ...outros} = pessoa;

console.log(nome, idade, altura);

console.log(outros);
