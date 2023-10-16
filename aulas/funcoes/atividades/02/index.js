function mostrarResposta (carroLigado, velocidade){
    console.log(`Carro ${carroLigado}. Velocidade: ${velocidade}.`);
}

const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log('Este carro está ligado.');
        } else {
            this.ligado = true;
            mostrarResposta(carroLigado, this.velocidade);
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log('Este carro já está desligado.');
        } else {
            this.ligado = false;
            this.velocidade = 0;
            mostrarResposta(carroLigado, this.velocidade);
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log('Não é possível acelerar um carro desligado.');
        } else {
            this.velocidade += 10;
            mostrarResposta(carroLigado, this.velocidade);
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log('Não é possível acelerar um carro desligado.');
        } else {
            this.velocidade -= 10;
            mostrarResposta(carroLigado, this.velocidade);
        }

    }
}

const carroLigado = carro.ligado ? 'ligado' : 'desligado';

// console.log(carro);
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();

