// Calcular Taxa de Juros

let valorPegoEmprestado = 60000;
let tempoPagoMeses = 24;
let valorPago = 90000;

let calculoEmprestimo = valorPago / valorPegoEmprestado;

const taxaDeJuros = (((Math.pow(calculoEmprestimo, 1 / tempoPagoMeses) - 1)) * 100).toFixed(3);

console.log(`O seu financiamento de ${valorPegoEmprestado} reais teve uma taxa de juros de ${taxaDeJuros}%, pois após 24 meses você teve que pagar ${valorPago} reais.`);

