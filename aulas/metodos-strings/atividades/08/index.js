const cpf = "011.022.033-44";
let cpfSemPontuacao = '';

cpfSemPontuacao = cpf.replaceAll('.', '').replace('-', '');
console.log(cpfSemPontuacao);