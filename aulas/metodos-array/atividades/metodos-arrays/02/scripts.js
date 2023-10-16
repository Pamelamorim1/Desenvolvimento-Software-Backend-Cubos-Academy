const nomes = ['Pâmela', 'Ruan', 'Chris', 'Julius', 'Rochelle', 'Marco'];
const tamanhoDoGrupo = 5;

function divisaoGrupos(arrayNomes, numInteiro) {
    let count = 1;
    for (let i = 0; i < arrayNomes.length; i+= numInteiro) {
        let newArray = arrayNomes.slice(i, i + numInteiro);
        console.log(`Grupo ${count}: ${newArray.join(', ')}.`);
        count++;
    }
}

divisaoGrupos(nomes, tamanhoDoGrupo);
