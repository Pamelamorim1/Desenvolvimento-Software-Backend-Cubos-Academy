// Compra com Desconto

//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === 'credito'){
    const descontoCredito = (valorDoProduto - (valorDoProduto * 5/100))/100;
    console.log(`Valor a ser pago: ${(descontoCredito).toFixed(2)}`);
} else if (tipoDePagamento === 'cheque') {
    const descontoCheque = (valorDoProduto - (valorDoProduto * 3/100))/100;
    console.log(`Valor a ser pago: ${descontoCheque}`);
} else {
    const descontoDebitoOUDinheiro = (valorDoProduto - (valorDoProduto * 10/100))/100;
    console.log(`Valor a ser pago: ${descontoDebitoOUDinheiro}`);
}
