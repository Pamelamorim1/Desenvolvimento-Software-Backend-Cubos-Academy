const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const tamanhoString = (arrayPalavras) => {
    const validandoTamanho = arrayPalavras.some((Element) => {
        return Element.length > 5;
    });
    if (validandoTamanho) {
        console.log('existe palavra inválida');
    } else {
        console.log('array validado');
    }
}

tamanhoString(palavras);