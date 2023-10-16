const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]
const amigoPerdido = 'Carlos';
let posicao = 1;
for (const n of participantes){
    const {nome} = n;
    if (nome === amigoPerdido){
        console.log(`Galera... O ${nome} está na posicao ${posicao}, corre lá!`);
        break;
    }
    posicao++;
}