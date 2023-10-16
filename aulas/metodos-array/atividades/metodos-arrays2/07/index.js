const enderecos = [
    { cep: 40313345, rua: "Rua dos Artistas" },
    { cep: 41325520, rua: "Rua Augusta" },
    { cep: 40218656, rua: "Avenida Paralela" },
    { cep: 41255822, rua: "Rua Carlos Gomes" },
];

function buscaPorCep(arrayEnderecos, cep) {
    const encontreCep = arrayEnderecos.find((Element) => {
        return Element.cep === cep;
    })
    console.log(encontreCep.rua);
}

buscaPorCep(enderecos, 00222444);





