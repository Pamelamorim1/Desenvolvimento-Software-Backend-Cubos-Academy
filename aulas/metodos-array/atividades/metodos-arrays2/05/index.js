const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];


const filtrarUsuarios = (arrayObjetosUsuarios) => {
    const filtroPorIdade = arrayObjetosUsuarios.filter((Element) => {
        return Element.idade > 17 && Element.idade < 66;
    })
    const possuemHabilitacao = filtroPorIdade.every((Element) => {
        return Element.habilitado === true;
    });
    if (possuemHabilitacao) {
        console.log('todos passaram no teste');
    } else {
        console.log('todos precisam estar habilitados');
    }
}

filtrarUsuarios(usuarios);


