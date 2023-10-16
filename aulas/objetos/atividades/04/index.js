


const usuarios = [
    {
        nome: "Renata",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Bruna",
        idade: 33,
    },
    {
        nome: "Levi",
        idade: 32,
    }
]

for (const user of usuarios) {
    if (user.idade < 18){
        user.maior_idade = false;
    } else {
        user.maior_idade = true;
    }
}

console.log(usuarios);
