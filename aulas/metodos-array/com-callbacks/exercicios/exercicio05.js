const produtos = [
    { nome: "arroz", preco: 500 },
    { nome: "carne", preco: 3200 },
    { nome: "biscoito", preco: 450 },
    { nome: "banana", preco: 320 },
];

const produtosComDesconto = produtos.map((Element) => {
    return {
        nome: Element.nome,
        preco: Element.preco,
        desconto: Element.preco * 0.10
    }
})

console.log(produtosComDesconto);