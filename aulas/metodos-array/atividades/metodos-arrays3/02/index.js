const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const comprimento = cidades.reduce((acum, valorAtual, indice, valorInicial) => {
    if (valorAtual.length > acum.length) {
        acum = valorAtual;
    }
    return acum;
});

console.log(comprimento);