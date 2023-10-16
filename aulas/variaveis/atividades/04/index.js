// Calcular juros compostos

let capitalInicial = 1000;
let taxaFixa = 0.125;
let tempoDeJuros = 5;

let montanteAcrescido = capitalInicial * (1 + taxaFixa) ** tempoDeJuros;

console.log(montanteAcrescido);
