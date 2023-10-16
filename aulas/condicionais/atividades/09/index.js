// Transformar nota em conceito
const nota = 10.1;

if (nota < 4) {
    console.log('O estudando obteve conceito E');
} else if (nota >= 4 && nota < 6) {
    console.log('O estudando obteve conceito D');
} else if (nota >= 6 && nota <= 7.9) {
    console.log('O estudando obteve conceito C');
} else if (nota >= 8 && nota <= 8.9){
    console.log('O estudando obteve conceito B');
} else if (nota >= 9 && nota <= 10) {
    console.log('O estudando obteve conceito A');
} else {
    console.log('Conceito Indisponível.');
}