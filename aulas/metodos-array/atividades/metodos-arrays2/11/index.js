const nomes = [
    "Pâmela",
    "Cauan",
    "Renata",
    "Alan",
    "Beatriz",
    "alicia",
    "Antonio",
  ];

const filtrarNome = nomes.filter((Element) => {
    return Element[0].toUpperCase() === 'A';
});

console.log(filtrarNome);