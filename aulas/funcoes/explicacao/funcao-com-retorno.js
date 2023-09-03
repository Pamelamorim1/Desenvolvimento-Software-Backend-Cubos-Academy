// validadando idade do usuario

function validandoMaioridade(idade) {
    if (idade < 18) {
        return false;
    } else {
        return true;
    }
}

const validacao = validandoMaioridade(18);

console.log(validacao); // true

