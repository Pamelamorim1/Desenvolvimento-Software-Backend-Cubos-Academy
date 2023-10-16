const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const filtrarPar = numeros.filter((Element) => {
    return Element % 2 === 0;
});

console.log(filtrarPar);