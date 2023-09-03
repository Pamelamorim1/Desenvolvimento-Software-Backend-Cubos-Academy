const livros = {
    nome: 'O dilema do porco espinho',
    autor: 'Leandro Karnal'
}

const pessoa = {
    nome: 'Pâmela',
    idade: 30,
    altura: 1.73,
    temCNH: false,
    carro: {
        marca: 'Toyota',
        modelo: 'Etios'
    }, 
    livros
}

console.log(pessoa.carro);
console.log(pessoa.carro.marca);
console.log(pessoa.carro.modelo);

console.log(pessoa.livros);
console.log(pessoa.livros.autor);
console.log(pessoa.livros.nome);
