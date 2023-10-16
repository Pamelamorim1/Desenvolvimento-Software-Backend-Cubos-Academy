const usuarios = [
    {
        nome: "Joilma",
        pets: [],
    },
    {
        nome: "Mainha",
        pets: ["Lipe", "Lulu"],
    },
    {
        nome: "Pâmela",
        pets: ["Bob"],
    },
    {
        nome: "Perpétua",
        pets: ["Neguinha", "Salsicha", "Batata"],
    },
    {
        nome: "Felipe",
        pets: ["Naninha"],
    },
]

for (const n of usuarios) {
    const { nome, pets } = n;
    const quantidadePets = pets.length;
    mensagem = '';
    if (quantidadePets === 0) {
        mensagem = `Sou ${nome} e não tenho pets.`
    } else if (quantidadePets === 1) {
        mensagem = `Sou ${nome} e tenho ${quantidadePets} pet.`;
    } else {
        mensagem = `Sou ${nome} e tenho ${quantidadePets} pets.`
    }
    console.log(mensagem);
}


