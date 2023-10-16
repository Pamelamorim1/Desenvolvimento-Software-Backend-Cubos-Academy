const numeros = [2, 1, 4, 7, 1, 3, 0, 10];
let somaPar = 0;

for (const num of numeros){
    const ehPar = num % 2 === 0;
    if(ehPar){
        somaPar += num;
    }
}
console.log(somaPar);
