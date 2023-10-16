const livros = [ 'Dom Quixote', 'Cem Anos de Solidão', 'A Divina Comédia', 'Guerra e Paz', 'A Montanha Mágica'];
const nomeDoLivro = "Dom Quixote";

function localizarLivro (arrayLivros, nomeDoLivro) {
    const indiceLivro = arrayLivros.indexOf(nomeDoLivro);
    console.log(`O livro está na posição ${indiceLivro + 1}`);
}

localizarLivro(livros, nomeDoLivro);