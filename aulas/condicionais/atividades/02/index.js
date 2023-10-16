// Par ou ímpar
const jogada1 = 27;
const jogada2 = 0;

function parOuImpar (jogada1, jogada2) {
    const resultado = (jogada1 + jogada2) % 2;
    if (resultado === 0){
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

console.log(parOuImpar(jogada1, jogada2));