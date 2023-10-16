let dia = 18;
let mes = 2;
let ano = 2023;

function formatandoData(dia, mes, ano) {
    const formatarDia = String(dia).padStart(2, '0');
    const formatarMes = String(mes).padStart(3, '/0');
    const formatarAno = String(ano).padStart(5, '/');

    console.log(formatarDia + formatarMes + formatarAno);
}

formatandoData(dia, mes, ano);