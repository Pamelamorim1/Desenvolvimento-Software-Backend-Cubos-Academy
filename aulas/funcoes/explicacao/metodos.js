const usuario = {
    nome: 'Pâmela',
    idade: 30,
    profissao: 'Programadora',
    altura: 1.75,
    apresentacao: function () {
        console.log(`Olá! Meu nome é ${this.nome}, sou um(a) ${this.faixaEtariaDoUsuario()}
        de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}.`);
    },
    faixaEtariaDoUsuario: function () {
        if (this.idade < 22) {
            return 'Jovem';
        } else if (this.idade < 66) {
            return 'Adulto(a)';
        } else {
            return 'Idoso(a)';
        }
    }

}

usuario.apresentacao();
console.log(usuario.faixaEtariaDoUsuario());


