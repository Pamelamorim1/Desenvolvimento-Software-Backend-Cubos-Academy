// Pedra, papel ou tesoura
const jogada1 = "papel";
const jogada2 = "pedra";

function jokenpo(jogada1, jogada2) {
    if (jogada1 === jogada2) {
        return 'Empate';
    } else {
        if (jogada1 === 'pedra' && jogada2 === 'papel' || jogada2 === 'pedra' && jogada1 === 'papel') {
            return 'papel';
        } else if (jogada1 === 'pedra' && jogada2 === 'tesoura' || jogada2 === 'pedra' && jogada1 === 'tesoura') {
            return 'pedra';
        } else if (jogada1 === 'tesoura' && jogada2 === 'papel' || jogada2 === 'tesoura' && jogada1 === 'papel'){
            return 'tesoura';
        } else if (jogada1 === 'tesoura' && jogada2 === 'pedra' || jogada2 === 'tesoura' && jogada1 === 'pedra'){
            return 'pedra';
        } else if (jogada1 === 'papel' && jogada2 === 'pedra' || jogada2 === 'papel' && jogada1 === 'pedra'){
            return 'papel';
        } else if (jogada1 === 'papel' && jogada2 === 'tesoura' || jogada2 === 'papel' && jogada1 === 'tesoura'){
            return 'tesoura';
        }
    }
}
console.log(jokenpo(jogada1, jogada2));
