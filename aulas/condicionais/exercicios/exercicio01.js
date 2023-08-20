// Exercicio 01 - Simulação de compra de um produto com desconto.
// Pagamento à vista = 10% de desconto;
// Parcelado = Sem desconto em até 6 vezes;

const precoDoProduto = 200;
const quantidadeParcelamento = 3;
const unidadeParcelamento = (quantidadeParcelamento == 1 ? 'vez' : 'vezes');

if (quantidadeParcelamento === 1) {
    //à vista
    const calculoDesconto = (precoDoProduto * 0.10).toFixed(2);
    const desconto = (precoDoProduto - calculoDesconto).toFixed(2);
    console.log(`Para o produto que possui o valor R$${precoDoProduto} no pagamento à vista, com 10% de desconto fica por R$${desconto} sem juros.`);
} else if (quantidadeParcelamento > 1 && quantidadeParcelamento <= 6) {
    //parcelado
    const valorParcelado = (precoDoProduto / quantidadeParcelamento).toFixed(2);
    console.log(`Para o produto que possui o valor R$${precoDoProduto} no pagamento parcelado em ${quantidadeParcelamento} ${unidadeParcelamento}, o valor será ${valorParcelado} em ${quantidadeParcelamento}x sem juros.`);
}

