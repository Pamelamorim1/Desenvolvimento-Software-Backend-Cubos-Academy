const numeros = [-22, 190, -76, -1, 17, 199, -64, 86];

const numPositivos = numeros.filter(encontreNumPositivos);

function encontreNumPositivos (Element) {
    return Element > 0;
}

console.log(numPositivos);