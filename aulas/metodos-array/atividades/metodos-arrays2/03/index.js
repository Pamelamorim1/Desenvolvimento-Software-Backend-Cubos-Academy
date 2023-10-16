const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

function validadeListaCompras (lista) {
    const existeItem = lista.some((Element) => {
        return Element === 'cerveja' || Element === 'Vodka';
    });
    if (existeItem) {
        console.log('revise sua lista, joão. possui bebida com venda proibida!');
    } else {
        console.log('tudo certo, vamos as compras!');
    }
}

validadeListaCompras(palavras);