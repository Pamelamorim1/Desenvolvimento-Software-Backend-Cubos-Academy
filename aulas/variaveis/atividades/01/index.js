// Calculadora IMC
let nomeUsuario = 'Pâmela';
let alturaUsuario = 1.73;
let pesoUsuario = 55;

function imc (alturaUsuario, pesoUsuario) {
    const imcUsuario = (pesoUsuario/(alturaUsuario**2)).toFixed(1);
    return imcUsuario;
}

function classificacaoImc (imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc > 18.5 && imc <= 24.9) {
        return 'no Peso Ideal'
    } else if (imc > 24.9 && imc <= 29.9){
        return 'Levemente acima do peso';
    } else if (imc > 29.9 && imc <= 34.9){
        return 'Obesidade grau I';
    } else if (imc > 34.9 && imc <= 39.9){
        return 'Obesidade grau II';

    } else {
        return 'Obesidade móbida';
    }
}

const resultadoImc = imc(alturaUsuario, pesoUsuario);

console.log(`|        Paciente        |        IMC        |`);
console.log(`|        ${nomeUsuario}          |       ${resultadoImc}        |` );
console.log(`O Imc deste paciente está, ${classificacaoImc(resultadoImc)}.`);
