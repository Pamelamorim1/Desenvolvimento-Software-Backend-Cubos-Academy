const comentario = "Esse COVID é muito perigoso!";

const existePalavra = comentario.includes('pandemia') || comentario.includes('PANDEMIA') ? true : false;

const existePalavra2 = comentario.includes('covid') || comentario.includes('COVID') ? true : false;

if (existePalavra || existePalavra2) {
    console.log('Comentário bloqueado por conter palavras proibidas.');
} else {
    console.log('Comentário autorizado.');
}
