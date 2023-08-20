// Exercicio 01 - Simulação de compra de um produto com desconto.
// Pagamento à vista = 10% de desconto;
// Parcelado = Sem desconto em até 6 vezes;
// Parcelado = Com juros de 7 a 12 vezes;

const precoDoProduto = 100;
const quantidadeParcelamento = 7;
const taxaDeJuros = 1;

if (quantidadeParcelamento === 1) {
    //à vista
    const calculoDesconto = (precoDoProduto * 0.10).toFixed(2);
    const desconto = (precoDoProduto - calculoDesconto).toFixed(2);
    console.log(`Para o produto que possui o valor R$${precoDoProduto} no pagamento à vista, com 10% de desconto fica por R$${desconto} sem juros.`);
} else if (quantidadeParcelamento > 1 && quantidadeParcelamento <= 6) {
    //parcelado sem juros
    const  precoSemJuros = (precoDoProduto / quantidadeParcelamento).toFixed(2);
    console.log(`Para o produto que possui o valor R$${precoDoProduto} no pagamento, o valor a pagar será ${precoSemJuros} em ${quantidadeParcelamento}x sem juros.`);
} else if (quantidadeParcelamento > 6 && quantidadeParcelamento <=12){
    //parcelado com juros
    const precoComJuros = (precoDoProduto * Math.pow((1 + taxaDeJuros/100), quantidadeParcelamento)).toFixed(2);
    const parceladoComJuros = (precoComJuros / quantidadeParcelamento).toFixed(2);
    console.log(`Para o produto que possui o valor R$${precoDoProduto} no pagamento, o valor a pagar será R$${precoComJuros} divido em R$${parceladoComJuros} em ${quantidadeParcelamento}x com juros.`);
} else {
    //parcelamento superior a 12 vezes
    console.log('Número de parcelas inválido.');
}