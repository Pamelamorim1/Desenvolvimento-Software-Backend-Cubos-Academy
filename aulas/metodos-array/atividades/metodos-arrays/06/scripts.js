const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function encontreODono(usuarios, pet) {
    let petExiste;
    let nomeDono;
    for (const user of usuarios) {
        const { nome, pets } = user;
        nomeDono = nome;
        petExiste = pets.includes(pet);
        if (petExiste) {
            break;
        }
    }
    if (petExiste) {
        console.log(`O dono(a) do(a) ${pet} é o(a) ${nomeDono}.`);
    } else {
        console.log(`Que pena ${pet}, não encontramos seu dono(a).`);
    }
}

encontreODono(usuarios, 'Max');