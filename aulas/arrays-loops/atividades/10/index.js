const numeros = [43, 60, 64, 8, 77, 7, 22];

let i = 0;
let j = 0;
let maiorDiferenca = 0;

while(i < numeros.length){
    let valor1 = numeros[i];
    while(j < numeros.length){
        const subtracaoValores = valor1 - numeros[j];
        if (subtracaoValores > maiorDiferenca ){
            maiorDiferenca = subtracaoValores;
        }
        j++;
    }
    j = 0;
    i++;
}
console.log(maiorDiferenca);

