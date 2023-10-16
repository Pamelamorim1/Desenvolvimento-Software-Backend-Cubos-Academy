const original = [12, 75, 21, 66, 15, 71, 74, 83, 9, 10];
const pares = [];
const impares = [];

for (let i = 0; i < original.length; i++) {
    let ehPar = (original[i] % 2) === 0;
    if (ehPar) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
}

console.log(pares);
console.log(impares);

