const arrayUsuarios = [{
    nome: 'Pâmela',
    idade: 21
}, {
    nome: 'Fernando',
    idade: 18
}, {
    nome: 'Gabriel',
    idade: 16
}, {
    nome: 'Ramon',
    idade: 19
}
];

const validarInformacoes = (usuarios) => {
    const fiscalizarFesta = usuarios.every((Element) => {
        return Element.idade >= 18;
    });

    if (fiscalizarFesta) {
        print('Festa Liberada!');
    } else {
        print('Possui menor de idade');
    }
}
function print(valor) {
    console.log(valor);
}

validarInformacoes(arrayUsuarios);