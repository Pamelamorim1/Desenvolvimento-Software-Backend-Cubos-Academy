const nomeArquivo = 'Foto da Familia.png';

function validarExtensao(nomeArquivo) {
    const extensaoDoArquivo = nomeArquivo.slice(nomeArquivo.length - 3);
    const tiposDeExtensao = ['jpg', 'jpeg', 'gif', 'png']; // Extensões válidas
    let extensaoCorreta = false;

    for (const t of tiposDeExtensao) {
        if (extensaoDoArquivo === t) {
            extensaoCorreta = true;
            console.log('Arquivo válido');
        }
    } if (!extensaoCorreta) {
        console.log('Arquivo inválido');
    }
}

validarExtensao(nomeArquivo);