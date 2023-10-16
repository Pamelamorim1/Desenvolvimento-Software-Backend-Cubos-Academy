const carrinho = {
    nomeDoCliente: "Jonatas",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 2,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 1,
            precoUnit: 5000
        }
    ]
}

function imprimirResumoDoCarrinho(carrinho) {
    let totalAPagar = 0;
    let totalItens = 0;
    for (const item of carrinho.produtos) {
        const { qtd, precoUnit } = item;
        totalAPagar += qtd * precoUnit;
        totalItens++;
    }
    mostrarResposta(carrinho.nomeDoCliente, totalItens, totalAPagar);
}

function mostrarResposta (cliente, totalItens, totalAPagar) {
    console.log(`Cliente: ${cliente}`);
    console.log(`Total de itens: ${totalItens} itens`);
    console.log(`Total a pagar: R$ ${(totalAPagar/100).toFixed(2)}`);
}

imprimirResumoDoCarrinho(carrinho);