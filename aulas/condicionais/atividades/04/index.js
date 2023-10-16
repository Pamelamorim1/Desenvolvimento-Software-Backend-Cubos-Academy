// Dominó é bucha ou não
const ladoA = 0;
const ladoB = 0;
const listaNomeBucha = ['Branco', 'Ás', 'Duque', 'Terno', 'Quadra', 'Quina', 'Sena'];

function domino (ladoA, ladoB){
    if (ladoA === ladoB){
        return `Bucha de ${listaNomeBucha[ladoA]}`;
    } else {
        return 'Não é bucha';
    }
}
console.log(domino(ladoA, ladoB)); //Bucha de Branco

