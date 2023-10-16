const original = [72, 24, 566, 21, 53, 77, 354];

let array = [];

for (let item of original) {
    let ehPar = item % 2;
    if (ehPar === 0) {
        array.push(item);
    }
}
console.log(array);
