console.log('Pâmela');
const imprimirNome = () => {
}

setTimeout(imprimirNome, 5000);

const funcao = () => {
    return 1 + 1;
}

setTimeout(function(oi) {
    return oi;
});

setTimeout(() => {
    return 'funcional';
}, 3000);