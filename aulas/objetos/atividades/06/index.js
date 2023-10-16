const usuarios = [
    {
        nome: "Kaio",
        idade: 17,
    },
    {
        nome: "Fernanda",
        idade: 25,
    },
    {
        nome: "Yuni",
        idade: 22,
    },
    {
        nome: "Beca",
        idade: 25,
    },
    {
        nome: "Patricia",
        idade: 14,
    }
]

const jovens = [];
const adultos = []

for (const user of usuarios) {
    const { idade } = user;
    if (idade < 18) {
        jovens.push(user);
    } else {
        adultos.push(user);
    }
}
console.log(jovens);
console.log(adultos);