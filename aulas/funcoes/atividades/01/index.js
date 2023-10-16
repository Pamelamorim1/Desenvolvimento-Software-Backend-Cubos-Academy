const prova = {
    aluno: "Adriano",
    materia: "Matemática",
    valor: 5,
    questoes: [
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "e"
        },
        {
            resposta: "f",
            correta: "b"
        },
        {
            resposta: "d",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let quantidadeDeAcertos = 0;
    let quantidadeDeQuestoes = 0;
    for (const p of prova.questoes) {
        const {resposta, correta} = p;
        if (resposta === correta){
            quantidadeDeAcertos++;
        }
        quantidadeDeQuestoes++;
    }
    const notaDoAluno = (prova.valor * quantidadeDeAcertos) / quantidadeDeQuestoes;
    console.log(`O aluno(a) ${prova.aluno} acertou ${quantidadeDeAcertos} questões e obteve nota ${notaDoAluno}.`);
}

corrigirProva(prova);
