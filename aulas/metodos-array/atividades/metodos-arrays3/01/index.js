let numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
let frutas = ["Maçã", "Laranja", "Limão", "Cereja", "Morango"];

//Ordenação numérica crescente 
const ordenacaoCrescente = numeros.sort((a, b) => {
    return a - b;
});

// Ordenação numérica descrescente
numeros = [0, -5, 50, 13, 4, 8, 2];
const ordenacaoDecrescente = numeros.sort((a, b) => {
    return b - a;
});

// Ordenação numérica UniCode
numeros = [10, 50, 20, 30,  8, 2];
const ordenacaoUnicode = numeros.sort();

// Ordenação alfabetica crescente
const ordenacaoAlfaCrescente = frutas.sort((a, b) => {
    return a.localeCompare(b);
});

// Ordenação alfabetica descrescente
frutas3 = ["Melancia", "Kiwi", "Manga", "Framboesa", "Goiaba"];
const ordenacaoAlfaDescrescente = frutas.sort((a, b) => {
    return b.localeCompare(a);
});

// Ordenação por quantidade de caracteres
frutas = ["Maçã", "Laranja", "Limão", "Cereja", "Morango"];
const ordenacaoQuantCaracteres = frutas.sort((a, b) => {
    if (a.length < b.length) {
        return -1;
    } else if (a.length > b.length) {
        return 1;
    } return 0;
});



console.log(ordenacaoCrescente);
console.log(ordenacaoDecrescente);
console.log(ordenacaoUnicode);
console.log(ordenacaoAlfaCrescente);
console.log(ordenacaoAlfaDescrescente);
console.log(ordenacaoQuantCaracteres);