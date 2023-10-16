const array = [0, 1, 2, 3, 4];

const resultado = array.reduce((acumulardor, elementoAtual, indice, array) => {
    return acumulardor + elementoAtual;
});

// const resultado = array.reduce((acumulardor, elementoAtual, indice, array) => {
//     return acumulardor + elementoAtual;
// }, 10);

console.log(resultado);