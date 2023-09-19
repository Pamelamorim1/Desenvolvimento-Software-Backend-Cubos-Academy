const email = 'pamela.taiane@ufba.br';
const indexArroba = email.indexOf('@');
const indexPonto = email.indexOf(".", indexArroba);

console.log(indexArroba);
console.log(indexPonto);


if (indexPonto > indexArroba) {
    console.log('Email válido!');
} else {
    console.log('Email inválido!');
    
}