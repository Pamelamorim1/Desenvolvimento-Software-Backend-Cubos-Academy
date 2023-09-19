let textoOriginal = '1,350,000';

function replaceAll(textoOriginal, text, newText) {
    let indexPonto = textoOriginal.includes(text);

    while (indexPonto) {
        textoOriginal = textoOriginal.replace(text, newText);
        indexPonto = textoOriginal.includes(text);
    } return textoOriginal;
}

console.log(replaceAll(textoOriginal, ',', '.'));


