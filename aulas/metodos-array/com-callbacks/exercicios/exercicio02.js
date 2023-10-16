const arrayArquivos = ['Arquivo.js', 'asieJnka.jpg', 'imagem92.png'];

const validarExtensao = (arrayArquivos) => {
    const existeExtensao = arrayArquivos.some((Element) => {
        return Element.slice(Element.length - 4, Element.length) === '.bat';
    });
    if (existeExtensao){
        console.log('Vírus detectado');
    } else {
        console.log('Nenhum vírus encontrado');
    }
} 

validarExtensao(arrayArquivos);