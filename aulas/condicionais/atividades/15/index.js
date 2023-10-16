// Nome para exibição
const primeiroNome = "Mario";
const sobrenome = "Bros";
const apelido = "";

if (apelido){
    console.log(apelido);
} else if (sobrenome) {
    console.log(primeiroNome + ' '+ sobrenome);
} else if (primeiroNome) {
    console.log(primeiroNome);
} else {
    console.log('Não possui nome.');
}