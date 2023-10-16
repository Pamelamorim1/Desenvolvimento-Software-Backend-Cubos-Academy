// Montanha Russa Muito Assustadora
const idade = 25;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade >= 12 && idade <= 65 && possuiPatologia === false && altura >= 150) {
    if (ehEstudante === true || idade < 18) {
        console.log('10 reais');
    } else {
        console.log('20 reais');
    }
} else {
    console.log('ACESSO NEGADO ');
}

