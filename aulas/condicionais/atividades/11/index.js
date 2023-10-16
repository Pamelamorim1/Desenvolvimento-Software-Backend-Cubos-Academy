//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 3_000_00;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 61;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10_000_00;

if (rendaMensalEmCentavos >= 2_000_00) {
    if (mesesDecorridos <= 60) {
        const valorParcela = rendaMensalEmCentavos * 0.18 / 100;
        console.log(`O valor da parcela desse mês é R$ ${valorParcela} reais.`);
    } else {
        console.log(`A pessoa não deve nada, ou seja, o valor da parcela é zero, pois já se passaram 60 meses.`);
    }
} else {
    console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
}