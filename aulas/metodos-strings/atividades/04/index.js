let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, "0");
const arrayNome = nome.split(' ');

for(let i = 0; i < arrayNome.length; i++) {
    let palavra = arrayNome[i];
    arrayNome[i] = palavra[0].toUpperCase() + palavra.slice(1);
}
console.log(String(arrayNome).replaceAll(',', " "));
console.log(identificador);
console.log(email.trim());
