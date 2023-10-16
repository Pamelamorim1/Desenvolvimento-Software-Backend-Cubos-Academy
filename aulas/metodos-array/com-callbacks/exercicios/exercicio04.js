const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" },
];

const filtrarPorStack = (stack, objetosInformacoes) => {
    const encontreStack = objetosInformacoes.filter((Element) => {
        return stack === Element.stack;
    });
    console.log(encontreStack);
}

filtrarPorStack('frontend', professores);
filtrarPorStack('backend', professores);

