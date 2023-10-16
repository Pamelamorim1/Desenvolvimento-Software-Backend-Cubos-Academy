const cidades = [
    "Paulo Afonso",
    "Feira de Santana",
    "Brasilia",
    "Camaçari",
    "Juazeiro",
];

const filtroCidade = (cidades) => {
    const newArray = cidades.filter((Element) => {
        return Element.length < 9;
    });
    console.log(newArray.join(', '));
}

filtroCidade(cidades);