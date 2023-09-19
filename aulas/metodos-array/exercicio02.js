function descartarDados (dados) {
    const startIndex = Math.round(dados.length * 0.1);
    const endIndex = Math.round(dados.length * 0.9);
    const arraySlice = dados.slice(startIndex, endIndex);
    console.log(arraySlice);
}

descartarDados([1,2,3,4,5,6,7,8,9,10]);