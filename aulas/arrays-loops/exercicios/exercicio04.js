const nome = 'Phela';
let encontrado = false;

for (let letra of nome) {
    if (letra === 'h' || letra === 'H') {
        console.log('Tem a letra H');
        encontrado = true;
        break
    }
}

if (!encontrado) {
    console.log('Não tem H');
}