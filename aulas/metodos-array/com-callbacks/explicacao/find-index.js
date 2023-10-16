// Encontre o carro no array de objetos
const arrayCarros = [{ nome: 'Argo', marca: 'Fiat', ano: 2012, cor: 'prata' },
{nome: 'Agile', marca:'Chevrolet', ano: 2020, cor:'branco'},
{nome: 'Panamera', marca:'Porsche', ano: 2021, cor:'preto'},
{nome: 'Série 3 Cabrio', marca:'BMW', ano: 2012, cor:'azul'},
];

const encontreIndiceCarro = arrayCarros.findIndex((carro) => {
    return carro.nome === 'Agile';
}); 

console.log(encontreIndiceCarro);

//Encontre o indice do array de numeros
const arrayNum = [1, 2, 3, 4, 5];

const encontreIndice = arrayNum.findIndex((Element) => {
    return Element === 1;
});

console.log(encontreIndice);