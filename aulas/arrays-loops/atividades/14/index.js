const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];
let menorValor;

for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] < arrayB[i]) {
        menorValor = arrayA[i];
        console.log(menorValor);
    } else if (arrayB[i] < arrayA[i]){
        menorValor = arrayB[i];
        console.log(menorValor);
    }
}
