// Casos de Covid

let populacaoInicial = 1000;
let pessoasInfectadas = 4;
let tempoPercorridoDias = 7;


const totalPessoasInfectadas = populacaoInicial * Math.pow(pessoasInfectadas, tempoPercorridoDias/tempoPercorridoDias);

console.log(totalPessoasInfectadas);