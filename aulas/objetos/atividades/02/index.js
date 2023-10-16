// Criar lista de propriedades para carro

const donoDoVeiculo = {
    nome: 'Pâmela',
    cep: 43293094
}

const empresaDeVenda = {
    nome_da_empresa: 'Farco Marcs',
    ano_do_surgimento: 2014,
    veiculos_vendidos: 400
}

const informacoesAdicinaisDoVeiculo = {
    revisado: true,
    arcondicionado: true,
    vendido: false
}

const carros = {
    marca: 'Fiat',
    modelo: 'Argo',
    ano: 2021,
    cor: 'Azul',
    quantidade_portas: 4,
    automatico: false,
    donoDoVeiculo,
    empresaDeVenda,
    informacoesAdicinaisDoVeiculo
}


console.log(carros);

console.log(carros.marca);
console.log(carros.informacoesAdicinaisDoVeiculo.vendido === true ?  'Infelizmente espere a próxima rodada.' : 'Pode vim buscar');
