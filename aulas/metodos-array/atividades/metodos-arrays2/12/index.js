const pessoas = [
    {
        nome: "Marco",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Danilo",
        idade: 32,
        profissao: "Programador",
    },
    {
        nome: "Janpier",
        idade: 26,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "Paulo",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

function filtrarUsuarios(arrayPessoas, idade, profissao) {
    const filtrarDados = arrayPessoas.filter((Element) => {
        return Element.idade > idade && Element.profissao === profissao;
    });
    console.log(filtrarDados);
}

filtrarUsuarios(pessoas, 20, 'Jornalista');