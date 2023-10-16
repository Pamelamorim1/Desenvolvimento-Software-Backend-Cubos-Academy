// Dominó é bucha ou não
const ladoA = 6;
const ladoB = 6;

function domino (ladoA, ladoB){
    if (ladoA === ladoB){
        return 'SIM';
    } else {
        return 'NÃO';
    }
}
console.log(domino(ladoA, ladoB));