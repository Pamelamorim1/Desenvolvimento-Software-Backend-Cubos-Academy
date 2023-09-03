// Descubra a faixa etária do usuario

function faixaEtariaDoUsuario(idade) {
    if (idade < 22) {
        return 'Jovem';
    } else if (idade < 66) {
        return 'Adulto(a)';
    } else {
        return 'Idoso(a)';
    }
}
console.log(faixaEtariaDoUsuario(70));

