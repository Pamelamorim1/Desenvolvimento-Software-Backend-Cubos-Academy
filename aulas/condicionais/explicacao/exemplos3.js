const temIngresso = true;
const censura = 14;
const idade = 18;
const presencaDosPais = true;

if (temIngresso) {
    if (idade >= censura || presencaDosPais === true) {
        console.log('Entrada permitida para assistir a série.');
    } else {
        console.log('Barrada a entrada pela idade/presença dos pais.');
    }
} else {
    console.log('Barrada(o) pelo ingresso.');
}