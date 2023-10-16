const numeroCartao = '1111222233334444';

const leftNumber = numeroCartao.slice(0,4);
const rigthNumber = numeroCartao.slice(numeroCartao.length - 4, numeroCartao.length);
const quantidadeCaracteres = ''.padStart(numeroCartao.length - 8, '*');

console.log(leftNumber + quantidadeCaracteres + rigthNumber);
