const arrayCarros = [{ nome: 'Argo', marca: 'Fiat', ano: 2012, cor: 'prata' },
{nome: 'Agile', marca:'Chevrolet', ano: 2020, cor:'branco'},
{nome: 'Panamera', marca:'Porsche', ano: 2021, cor:'preto'},
{nome: 'Série 3 Cabrio', marca:'BMW', ano: 2012, cor:'azul'},
];


const encontreOCarro = (marcaCarro, arrayObjetosSobreCarro) => {
    const encontreCarro = arrayObjetosSobreCarro.find((Element) => {
        return marcaCarro === Element.marca;
    });
    console.log(encontreCarro);
}

encontreOCarro('BMW', arrayCarros);
