const recepcao = () => {
    console.log('Bem vindo!');
    console.log(intervalo._idleTimeout);
    console.log(intervalo);
    clearInterval(intervalo);
}

// setInterval(recepcao, 2000);

const intervalo = setInterval(recepcao, 2000);
