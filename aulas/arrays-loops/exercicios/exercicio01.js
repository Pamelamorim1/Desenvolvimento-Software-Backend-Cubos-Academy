// Crie lista com 5 paises
const arrayPaises = ['Brasil', 'EUA', 'Canadá', 'China', 'Coreia do Sul'];

arrayPaises.push('França');
console.log(arrayPaises); // [ 'Brasil', 'EUA', 'Canadá', 'China', 'Coreia do Sul', 'França' ]

arrayPaises.pop();
console.log(arrayPaises); // [ 'Brasil', 'EUA', 'Canadá', 'China', 'Coreia do Sul' ]

arrayPaises.unshift('França');
console.log(arrayPaises); // [ 'França', 'Brasil', 'EUA', 'Canadá', 'China', 'Coreia do Sul' ]

arrayPaises.shift();
console.log(arrayPaises); // [ 'França', 'Brasil', 'EUA', 'Canadá', 'China', 'Coreia do Sul' ]

console.log(arrayPaises[arrayPaises.length - 1]); // Coreia do Sul

console.log(arrayPaises[1]); // EUA

console.log(arrayPaises[2]); // Canadá

