const informacao = '1234';

let novo = informacao.padStart(8);
console.log(novo);
novo = informacao.padStart(10, '-- ');
console.log(novo);

