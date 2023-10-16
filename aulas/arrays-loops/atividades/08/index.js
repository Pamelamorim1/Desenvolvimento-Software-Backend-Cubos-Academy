const array = [43, 60, 64, 8, 77, 7, 22];
let maiorValor = -1;

for (let i = 0;  i < (array.length); i++) {
    if (maiorValor < array[i]){
        maiorValor = array[i];
    } 
}
console.log(maiorValor);

