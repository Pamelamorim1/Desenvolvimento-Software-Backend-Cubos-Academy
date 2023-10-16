let percentualDeDesconto = 60;
let precoDoProduto = 110.00;
let dinheiroDoUsuario = 50.00;

const desconto = (((precoDoProduto - dinheiroDoUsuario) * 100) / precoDoProduto).toFixed(2);

console.log(`O valor a ser pago é R$ ${desconto}`);
