const produtos = [{
    nome: 'Pão',
    precoUnit: 1300,
    quantidadeComprada: 1
}, {
    nome: 'Açucar',
    precoUnit: 1400,
    quantidadeComprada: 2
}, {
    nome:'Bala',
    precoUnit: 100,
    quantidadeComprada: 4
}]

const cliente = {
    nome: 'Pâmela',
    idade: 21,
    produtos
}

let valorAPagar = 0;

for(let produto of produtos){
    valorAPagar += (produto.precoUnit * produto.quantidadeComprada);
}

console.log(`O cliente ${cliente.nome} deve pagar o valor ${(valorAPagar/100).toFixed(2)}`);