const nome = 'Rio de Janeiro-RJ';
const indexSimbolo = nome.indexOf('-');

console.log(nome.slice(3));
console.log(nome.slice(0, indexSimbolo));
console.log(nome.slice(-2));
console.log(nome.slice(indexSimbolo + 1));
