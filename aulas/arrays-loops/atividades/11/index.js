const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];
let newArray = [];

for (const number of original) {
    if (number >= 10 && number <= 20 || number > 100) {
        newArray.push(number);
    }
}
console.log(newArray);

