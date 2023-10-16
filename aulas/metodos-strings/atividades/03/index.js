const texto = "Aprenda programar do zero na Cubos Academy";

const arrayTexto = texto.toLowerCase().split(' ');
let newUrl = '';

for(const palavra of arrayTexto){
    if (palavra != arrayTexto[arrayTexto.length - 1]){
        newUrl += palavra + '-';
    } else {
        newUrl += palavra;
    }
}
console.log(newUrl);