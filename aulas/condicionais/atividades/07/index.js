//Isenção de impostos
const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 28_559_69; //emCentavos

function isencaoLeao(aposentada, portadoraDeDoenca, totalDeRendimentos) {
    if (aposentada === true || portadoraDeDoenca === true) {
        return 'ISENTA';
    } else {
        if (totalDeRendimentos > 28_559_70) {
            return 'PEGA LEAO';
        } else {
            return 'VAZA LEAO! JA TA DIFICIL SEM VOCE';
        }
    }
}

console.log(isencaoLeao(aposentada,portadoraDeDoenca, totalDeRendimentos)); //VAZA LEAO! JA TA DIFICIL SEM VOCE