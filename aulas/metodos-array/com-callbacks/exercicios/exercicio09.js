const array = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
];

const arrayCompactado = array.reduce((acumulador, elementoAtual, indice, array) => {
    acumulador = [...acumulador, ...elementoAtual];
    return acumulador;
}, []);

console.log(arrayCompactado);