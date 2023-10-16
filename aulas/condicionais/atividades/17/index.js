//Extrato de Compra Online
//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 8;

//valor pago
const valorPago = 300;

// Calculo
const novoValorDoProduto = valorDoProduto / 100;
const novaQuantidadeParcelas = quantidadeDoParcelamento - ((quantidadeDoParcelamento * valorPago) / novoValorDoProduto);
const valorParcelas = novoValorDoProduto / quantidadeDoParcelamento;
console.log(`Restam ${novaQuantidadeParcelas.toFixed()} parcelas de R$${valorParcelas}`);
