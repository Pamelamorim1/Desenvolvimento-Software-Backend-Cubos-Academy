const nome = 'josé messias junior';

const arrayNome = nome.split(' ');
let nomeFormatado = '';

for (const nome of arrayNome) {
    const primeiraLetra = nome[0].toUpperCase();
    const restanteDoNome = nome.slice(1);
    nomeFormatado += primeiraLetra + restanteDoNome + ' ';
}
console.log(nomeFormatado.trim());