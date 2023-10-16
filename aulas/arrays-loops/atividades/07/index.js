const nomes = ["Pamela", "Joilma", "Mainha", "Ana"];
let arrayNames = [];

for (let palavra of nomes){
    for(const caracter of palavra){
        if (caracter === 'A' || caracter === 'a'){
            arrayNames.push(palavra);
            break
        } else {
            break
        }
    }
}
console.log(arrayNames);

