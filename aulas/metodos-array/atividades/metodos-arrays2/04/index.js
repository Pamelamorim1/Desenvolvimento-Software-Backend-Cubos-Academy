const numeros = [0, 122, 4, 6, 7, 8, 44];

const validarValorPar = (numeros) => {
    const ehPar = numeros.every((Element) => {
        return Element % 2 === 0;
    });

    if (ehPar) {
        console.log('array válido');
    } else {
        console.log('array inválido');
    }
}

validarValorPar(numeros);