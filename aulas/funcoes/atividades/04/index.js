function inserirDeposito(preco) {
    return deposito = {
        tipo: "Depósito",
        valor: preco,
    }
}

function retirarSaldo(preco) {
    return saque = {
    tipo: "Saque",
    valor: preco}
}

const contaBancaria = {
    nome: 'Claudio',
    saldo: 0,
    historicos: [],
    depositar: function (deposito) {
        this.historicos.push(inserirDeposito(deposito));
        this.saldo += deposito;
        console.log(`Deposito de R$ ${deposito / 100} para o cliente: ${this.nome}`);
    },
    sacar: function (saque) {
        const totalPosRetirada = this.saldo - saque;
        if (totalPosRetirada >= 0) {
            this.historicos.push(retirarSaldo(saque));
            this.saldo -= saque;
            console.log(`Saque de R$ ${saque / 100} realizado para o cliente: ${this.nome}`);
        } else {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`);
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}`);
        console.log('Histórico:');
        for (const extrato of contaBancaria.historicos) {
            const {tipo, valor} = extrato;
            console.log(`${tipo} de $${valor/100}`);
        }
    }

}

contaBancaria.depositar(100_00);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();