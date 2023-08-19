const temIngresso = false;
const censura = 14;
const idade = 18;

if (temIngresso === true) {
    if (idade >= censura) {
        console.log('Acesso liberado.');
    } else {
        console.log('Barrado pela idade.');
    }
} else {
    console.log('Barrado pelo ingresso.');
}