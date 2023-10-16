const nomes = ['Volkswagen Gol', 'Hyundai HB20', 'Hilux', 'Fiat Argo', 'Fusca', 'Chevrolet Onix', 'Fiat Mobi'];
const posicao = 4;

function encontrarCarro (arrayCarros, posicao) {
    const newArray = arrayCarros.slice(posicao, posicao + 3);
    console.log(newArray.join(' - '));
}

encontrarCarro(nomes, posicao);