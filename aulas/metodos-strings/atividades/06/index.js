const celular = 71989189888;

const celularString = String(celular).padStart(11, '0');

const ddd = celularString.slice(0, 2).padStart(3, '(').padEnd(4, ')');

const numDigitos = celularString.slice(2, 3).padEnd(2,' ') + celularString.slice(3, 7).padEnd(5, '-') + celularString.slice(7, 12);

if (String(celular).length === 11){
    console.log(`${ddd} ${numDigitos}`);
} else {
    console.log(`${numDigitos}`);
}

console.log();



