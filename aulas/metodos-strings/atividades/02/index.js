const cpf = "12345678900";
const cnpj = "12345678000199";
let cpfFormatado = '';
let cnpjFormatado = '';

if (cpf.length === 11) {
    for (let i = 0; i < 12; i += 3) {
        if (i < 6) {
            cpfFormatado += cpf.slice(i, i + 3) + '.';
        } else if (i < 9) {
            cpfFormatado += cpf.slice(i, i + 3);
        } else {
            cpfFormatado += '-' + cpf.slice(i, i + 3);
        }
    }
    console.log(cpfFormatado);
} else {
    console.log('CPF Inválido');
}

if (cnpj.length === 14) {
    cnpjFormatado += cnpj.slice(0, 2) + '.'; 
    cnpjFormatado += cnpj.slice(2, 5) + '.';
    cnpjFormatado += cnpj.slice(5, 8) + '/';
    cnpjFormatado += cnpj.slice(8, 12) + '-';
    cnpjFormatado += cnpj.slice(12, 14);
    console.log(cnpjFormatado);
} else {
    console.log('CNPJ Inválido');
}
