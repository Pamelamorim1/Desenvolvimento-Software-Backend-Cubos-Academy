// Caso um dos elementos passa no teste com retorno booleano

const arrayLetras = ['a', 'b', 'c'];

const existeCaractere = (arrayLetras) => {
    const valorExiste = arrayLetras.some((Element) => {
        return Element === 'a';
    });
    console.log(valorExiste);
    if(valorExiste) {
        console.log('Letra Existe');
    } else {
        console.log('Letra Não Existe');
    }
}

existeCaractere(arrayLetras);