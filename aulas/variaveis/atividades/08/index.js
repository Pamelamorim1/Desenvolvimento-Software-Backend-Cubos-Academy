// Calculo do perímetro e área de um círculo

const pi = Math.PI;
let raioCirculo = 1;
let comprimentoCirculo = (2 * pi * raioCirculo).toFixed(1);
let areaCirculo = (pi * Math.pow(raioCirculo, 2)).toFixed(2);

console.log(`Para um circulo com raio ${raioCirculo}, o seu comprimento será ${comprimentoCirculo} e sua área ${areaCirculo}`);

