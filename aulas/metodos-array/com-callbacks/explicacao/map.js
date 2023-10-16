const arrayNum = [1, 2, 3];

const multiplicacao = arrayNum.map((Element) => {
    return Element * 2;
});

const resta = arrayNum.map((Element) => {
    return Element % 2;
})

console.log(multiplicacao);
console.log(resta);

