

const carro = {
    marca: 'Toyota',
    modelo: 'Etios'
};

const pessoa = {
    nome: 'Pâmela',
    idade: 30,
    altura: 1.73,
    temCNH: false,
    carro
}

const objetoFundido = {
    ...pessoa,
    ...carro
}
console.log(objetoFundido);