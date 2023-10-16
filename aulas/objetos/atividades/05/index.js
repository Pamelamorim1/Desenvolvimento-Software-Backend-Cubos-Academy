const arrayAulas = ['Introdução a programação', 'Variáveis', 'Condicionais', 'Arrays'];

const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: []
}

let id = 1;

for (const aulas of arrayAulas) {
    const objetosAulas = {
        identificador: id,
        nome_da_aula: aulas
    }
    curso.aulas.push(objetosAulas);
    id++;
}
console.log();
console.log(curso)

