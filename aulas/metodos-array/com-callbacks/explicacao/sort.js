// -1 = O primeiro fique antes do segundo;
// 1 = O segundo fique antes do primeiro;
// 0 = Mantem a ordem;

let numeros = [2, 99, 30, 4, 61, 33];

//Ordenação UniCode
console.log('Ordenação UniCode: ' + numeros.sort());

numeros = [2, 99, 30, 4, 61, 33];
numeros.sort((a, b) => {
    return a - b;
});
console.log('Ordenação crescente: ' + numeros);

numeros = [2, 99, 30, 4, 61, 33];
numeros.sort((a, b) => {
    if (a < b) {
        return -1;
    } if (a > b) {
        return 1;
    }
    return 0;
});
console.log('Com ifs crescente: ' + numeros);

numeros = [2, 99, 30, 4, 61, 33];
numeros.sort((a, b) => {
    if (a < b) {
        return 1;
    } if (a > b) {
        return -1;
    }
    return 0;
});
console.log('Com ifs decrescente: ' + numeros);

numeros = [2, 99, 30, 4, 61, 33];
numeros.sort((a, b) => {
    return b - a;
});
console.log('Ordenação decrescente: ' + numeros);

