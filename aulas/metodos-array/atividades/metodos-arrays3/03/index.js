const numeros = [22, 98, -76, 8, 1, -19, 5, 60, 44];

const filtrarMaior = numeros.reduce((acum, valorAtual) => {
    if (valorAtual > acum) {
        acum = valorAtual
    }
    return acum;
});

console.log(filtrarMaior);