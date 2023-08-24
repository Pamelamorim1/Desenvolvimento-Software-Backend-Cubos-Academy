const valorFinal = 50;
let quantidade = 0;

for (let i = 0; i < valorFinal; i++) {
    let ehPar = i % 2;
    if (ehPar === 0) {
        quantidade += 1;
        console.log(i);
    }
}
console.log(quantidade);