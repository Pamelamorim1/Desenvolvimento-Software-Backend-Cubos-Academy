const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length <= 4 && filaDeFora !== 0) {
    for(const cliente of filaDeFora){
        filaDeDentro.push(cliente);
        filaDeFora.shift();
        break
    }
}
console.log(filaDeDentro);
console.log(filaDeFora);