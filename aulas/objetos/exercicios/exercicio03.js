const produtos = [
    {
        nome: 'Açucar',
        precoUnit: 250
    }, {
        nome: 'Pão',
        precoUnit: 450
    }
]

const cliente = {
    nome: 'Pâmela',
    idade: 21,
    produtos
}

console.log(cliente);
console.log(cliente.nome);
console.log(cliente.idade);
cliente.idade = 26;
console.log(cliente.idade);
console.log(cliente.produtos[0].nome);
console.log(cliente.produtos[1].precoUnit);