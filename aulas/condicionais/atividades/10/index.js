//Identificando caracteres
const caractere = 3;
const vogalMaiuscula = ['A', 'E', 'I', 'O', 'U'];
const vogalMinuscula = ['a', 'e', 'i', 'o', 'u'];
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function categoriaCaracter() {
    for (let letra of vogalMaiuscula) {
        if (caractere === letra) {
            return 'Vogal maiúscula';
        }
    }
    for (let letra of vogalMinuscula) {
        if (caractere === letra) {
            return 'Vogal minúscula';
        }
    }
    for (let letra of numero) {
        if (letra === caractere) {
            return 'Número';
        }
    }
    return 'Consoante';
}

console.log(categoriaCaracter());

