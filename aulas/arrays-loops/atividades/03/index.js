const numeros = [10, 22, 7+3, 87, 10, 284];
let possuiValor = false;

for (let num = 0; num < numeros.length; num++){
    if (numeros[num] === 10){
        possuiValor = true;
        console.log(num);
    }
}

if (!possuiValor){
    console.log('-1');
}

