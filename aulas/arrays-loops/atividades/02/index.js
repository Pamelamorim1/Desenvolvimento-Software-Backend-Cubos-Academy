const letras = ["A", "e", "B", "C", "E", "e", 'F', 'J', "el"];
let soma = 0;

for (let caracter of letras){
    if (caracter === 'E' || caracter === 'e'){
        soma += 1;
    }
}
if (soma === 0){
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else {
    console.log(`Foram encontradas ${soma} "E" ou "e".`);
}
